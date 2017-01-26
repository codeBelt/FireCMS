/**
 * Runs local server @ http://localhost:3000
 * Edit env files to set default port and preference to automatically open a browser window
 * See https://www.browsersync.io/docs/options for full list of options
 *
 * @usage gulp serve
 */

import browserSync from 'browser-sync';
import browserSyncSpa from 'browser-sync-spa';
import gulp from 'gulp';
import runSequence from 'run-sequence';

function startServer() {
    const browser = browserSync.get('local');
    browser.use(browserSyncSpa({}));

    browser.init(
        {
            port: process.env.SERVER_PORT,
            ui: { port: process.env.SERVER_UI_PORT },
            open: process.env.SERVER_OPEN === 'true',
            files: process.env.DIRECTORY_DEST,
            server: { baseDir: process.env.DIRECTORY_DEST },
            notify: false,
            https: false,
            ghostMode: {
                clicks: false,
                forms: false,
                scroll: false,
            },
        },
        (error, browser) => {
            if (error) {
                console.warn(error);
            }
        }
    );
}

gulp.task('startServer', startServer);

export default function serve() {
    return runSequence('build', 'startServer');
}
