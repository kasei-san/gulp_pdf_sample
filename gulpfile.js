var gulp        = require('gulp');
var markdown    = require('gulp-markdown');
var markdownpdf = require('gulp-markdown-pdf');
var clean       = require('gulp-clean');

gulp.task('default', ['clean', 'html', 'pdf']);

gulp.task('html', function () {
  return gulp.src('intro.md')
    .pipe(markdown())
    .pipe(gulp.dest('dist/html'));
});

gulp.task('pdf', function () {
  return gulp.src('intro.md')
    .pipe(markdownpdf())
    .pipe(gulp.dest('dist/pdf'));
});

gulp.task('clean', function () {
  return gulp.src('dist')
    .pipe(clean());
});
