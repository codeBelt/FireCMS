/**
 * Lints all JavaScript files for syntax issues in /src/assets/scripts
 *
 * @usage gulp lint
 */

import tslint from 'gulp-tslint';
import gulp from 'gulp';

export default function lint() {
    return gulp
        .src([
            `${process.env.DIRECTORY_SRC}/assets/scripts/**/*.ts`,
        ])
        .pipe(tslint({
            formattersDirectory: 'node_modules/custom-tslint-formatters/formatters',
            formatter: 'grouped',
        }))
        .pipe(tslint.report({
            summarizeFailureOutput: true,
            emitError: false,
        }))
}
