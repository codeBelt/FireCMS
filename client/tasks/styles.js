/**
 * Builds CSS files found in /src/assets/styles
 *
 * @usage gulp styles
 */

import atImport from 'postcss-import';
import apply from 'postcss-apply';
import urlrev from 'postcss-urlrev';
import browserSync from 'browser-sync';
import cssnext from 'postcss-cssnext';
import cleanCSS from 'gulp-clean-css';
import discardComments from 'postcss-discard-comments';
import gulp from 'gulp';
import gulpIf from 'gulp-if';
import notify from './notify';
import postcss from 'gulp-postcss';
import postcssFor from 'postcss-for';
import simpleVars from 'postcss-simple-vars';
import sourcemaps from 'gulp-sourcemaps';

const processors = [
    atImport,
    discardComments,
    apply,
    postcssFor,
    simpleVars,
    cssnext,
    urlrev({ relativePath: 'src/assets/styles/'}),
];

function watchStyles() {
    gulp.watch(`${process.env.DIRECTORY_SRC}/assets/styles/**/*`, () => {
        notify.log('STYLES: file update detected, rebuilding...');
        buildStyles();
    });
}

function buildStyles() {
    const browser = browserSync.get('local');

    return gulp
        .src(`${process.env.DIRECTORY_SRC}/assets/styles/*.css`)
        .pipe(notify.onError('STYLES: error'))
        .pipe(gulpIf(process.env.SOURCE_MAPS === 'true', sourcemaps.init()))
        .pipe(postcss(processors))
        .pipe(gulpIf(process.env.MINIFY === 'true', cleanCSS()))
        .pipe(gulpIf(process.env.SOURCE_MAPS === 'true', sourcemaps.write('./')))
        .pipe(gulp.dest(`${process.env.DIRECTORY_DEST}/assets/styles/`))
        .on('end', notify.onLog('STYLES: rebuild complete'))
        .on('end', browser.reload);
}

export default function styles() {
    if (process.env.WATCH === 'true') {
        watchStyles();
    }

    return buildStyles();
}
