require('babel-register')({ ignore: /node_modules|tools\/cache/ });
require('browser-sync').create('local');
require('env-merger')();
const fs = require('fs');
const gulp = require('gulp');
const pkg = require('./package.json');
const tasksDir = './tasks';

// Used if we only want to bring parts of a library into vendor.js
Object.keys(pkg.subDependencies).forEach(dep => {
    delete pkg.dependencies[dep];
    pkg.subDependencies[dep].forEach(subdep => {
        pkg.dependencies[subdep] = '0.0.0';
    });
});

// Lazy-load all gulp tasks found under /tasks
fs.readdirSync(tasksDir).forEach(filename => {
    const taskname = filename.replace('.js', '');

    function runTask(done) {
        return require(`${tasksDir}/${filename}`)
            .default(done);
    }

    gulp.task(taskname, runTask);
});

gulp.task('default', ['build']);

console.log(`BUILDING USING ENVIRONMENT: ${process.env.NODE_ENV || 'production'}`);
