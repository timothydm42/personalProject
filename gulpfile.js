
const gulp =  require('gulp'),
      del = require('del'),
      sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps'),
      uglify = require('gulp-uglify'),
      concat = require('gulp-concat'),
      print = require('gulp-print'),
      babel = require('gulp-babel'),
      nodemon = require('gulp-nodemon'),
      cacheBuster = require("gulp-cachebust");

const cachebust = new cacheBuster();

  gulp.task("clean",function (cb) {
       del([
           'dist'
       ], cb);
  });
  gulp.task("buildCss",[], function () {
       return gulp.src('public/styles/*')
           .pipe(sourcemaps.init())
           .pipe(sass())
           .pipe(cachebust.resources())
           .pipe(concat('styles.css'))
           .pipe(sourcemaps.write('./maps'))
           .pipe(gulp.dest('./public/dist'));
  });
  gulp.task("buildJs",[], function() {
       return gulp.src('public/js/**/*.js')
           .pipe(sourcemaps.init())
           .pipe(print())
           .pipe(babel({ presets: ["es2015"] }))
           .pipe(concat('bundle.js'))
           .pipe(uglify())
           .pipe(sourcemaps.write('./'))
           .pipe(gulp.dest('./public/dist/js'));
  });
  gulp.task("build",['clean', 'buildCss', 'buildJs'], function() {
       return gulp.src('public/index.html')
           .pipe(cachebust.references())
           .pipe(gulp.dest('./public/dist'));
  });
  gulp.task("watch",function() {
      return gulp.watch(['./public/index.html','./public/views/*.html', './public/styles/*', './public/js/**/*.js'], ["build"]);
  });
  gulp.task('gulpMonWatch', function () {
  nodemon({
    script: 'index.js',
    ext: 'js html css',
    env: {
      'NODE_ENV': 'development'
    }
  })
    .on('start', ['watch'])
    .on('change', ['watch'])
    .on('restart', function () {
      console.log('restarted!');
    });
});

gulp.task('allWatch', ['gulpMonWatch']);
