const gulp = require('gulp');
const del = require('del');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const scss = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const fileinclude = require('gulp-file-include');
const uglify = require('gulp-uglify');
const imask = require('imask');
const babel = require('gulp-babel');
const { cleanup } = require('browser-sync');


const paths = {
  html: {
    src: './src/html/*.html',
    dest: './build/',
    watchSrc: './src/html/**/*.*'
  },
  styles: {
    src: './src/scss/**/*.scss',
    dest: './build/css/'
  },
  stylesLibs: {
    src: './src/scss/libs/*.css',
    dest: './build/css/'
  },
  scripts: {
    src: './src/js/**/*.*',
    dest: './build/js/'
  },
  fonts: {
    src: './src/fonts/**/*.*',
    dest: './build/fonts/'
  },
  images: {
    src: './src/images/**/*.*',
    dest: './build/images/'
  },
  upload: {
    src: './src/upload/**/*.*',
    dest: './build/upload/'
  },
  serverPath: {
    baseDir: './build',
    baseFile: './index.html'
  }
}


function html() {
  return gulp.src(paths.html.src)
    .pipe(plumber({
      errorHandler: notify.onError(function (err) {
        return {
          title: 'HTML include',
          sound: false,
          message: err.message
        }
      })
    }))
    .pipe(fileinclude({
      prefix: '@@'
    }))
    .pipe(gulp.dest(paths.html.dest))
}
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(plumber({
      errorHandler: notify.onError(function (err) {
        return {
          title: 'Styles',
          sound: false,
          message: err.message
        }
      })
    }))
    .pipe(sourcemaps.init())
    .pipe(scss())
    .pipe(cleanCSS())
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 4 versions']
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream())
}
function stylesLibs() {
  return gulp.src(paths.stylesLibs.src)
    .pipe(cleanCSS())
    .pipe(concat('libs.min.css'))
    .pipe(gulp.dest(paths.stylesLibs.dest))
    .pipe(browserSync.stream())
}
function fonts() {
  return gulp.src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.dest));
}
function images() {
  return gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest));
}
function upload() {
  return gulp.src(paths.upload.src)
    .pipe(gulp.dest(paths.upload.dest));
}
function watch() {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.html.watchSrc, html);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.images.src, images);
  gulp.watch(paths.images.src, fonts);
  gulp.watch(paths.images.src, upload);
  gulp.watch(['./build/*.html', './build/css/**/*.css', './build/js/**/*.js'], browserSync.reload);
}
function server() {
  browserSync.init({
    server: {
      baseDir: paths.serverPath.baseDir
    },
    startPath: paths.serverPath.baseFile
  })
}
function clean() {
  return del('./build')
}
function scripts() {
  return gulp.src(paths.scripts.src, {
    sourcemaps: true
  })
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest))
}


const build = gulp.series(
  gulp.parallel(clean),
  gulp.parallel(html, styles, stylesLibs, images, fonts, upload, scripts),
  gulp.parallel(server, watch)
)


exports.html = html
exports.stylesLibs = stylesLibs
exports.styles = styles
exports.fonts = fonts
exports.images = images
exports.scripts = scripts
exports.clean = clean
exports.watch = watch
exports.upload = upload
exports.server = server
exports.build = build
exports.default = build
