'use strict';
let gulp = require('gulp');
let path = require('path');
let jsSrc = [require.resolve('es6-promise'), require.resolve('whatwg-fetch'),
                path.join(path.dirname(require.resolve('vue')), 'vue.min.js')];
let browserSync = require('browser-sync');
let reload = browserSync.reload;

gulp.task('build', () => gulp.src(jsSrc).pipe(gulp.dest('assets')) );
gulp.task('watch', () => {
    browserSync({ server: { baseDir: '.' } });
    gulp.watch(['index.html'], ['reload']);
});
gulp.task('reload', () => { reload(); });