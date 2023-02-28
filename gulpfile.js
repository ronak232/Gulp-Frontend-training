// Load Gulp...of course
const { src, dest, task, watch, series, parallel } = require("gulp");

// CSS related plugins
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

// JS related plugins
var uglify = require("gulp-uglify");
var babelify = require("babelify");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var stripDebug = require("gulp-strip-debug");

// Utility plugins
var rename = require("gulp-rename");
var sourcemaps = require("gulp-sourcemaps");
var notify = require("gulp-notify");
var plumber = require("gulp-plumber");
var options = require("gulp-options");
var gulpif = require("gulp-if");
var del = require("del");
var fileinclude = require("gulp-file-include");
var inject = require("gulp-inject");
// Browers related plugins
var browserSync = require("browser-sync").create();

// Project related variables
var styleSRC = "./Assets/scss/style.scss";
var styleURL = "./dist/css/";
var mapURL = "./";

var jsSRC = "./Assets/js/";
var jsFront = "main.js";
var jsFiles = [jsFront];
var jsURL = "./dist/js/";

var imgSRC = "./Assets/images/**/*";
var imgURL = "./dist/images/";

var fontsSRC = "./Assets/fonts/**/*";
var fontsURL = "./dist/fonts/";

var htmlSRC = "./*.html";
var htmlURL = "./dist/";

var styleWatch = "./Assets/scss/**/*.scss";
var jsWatch = "./Assets/js/**/*.js";
var imgWatch = "./Assets/images/**/*.*";
var fontsWatch = "./Assets/fonts/**/*.*";
var htmlWatch = "./*.html";
var template = "./Prototype/Templates/**/*.html";
var htmlComponent = "./Prototype/Components/**/*.html";

// Tasks
function browser_sync() {
  browserSync.init({
    server: {
      baseDir: "./dist/",
    },
  });
}

function reload(done) {
  browserSync.reload();
  done();
}

function css(done) {
  src([styleSRC])
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        errLogToConsole: true,
        outputStyle: "compressed",
      })
    )
    .on("error", console.error.bind(console))
    .pipe(
      autoprefixer({ browsers: ["last 2 versions", "> 5%", "Firefox ESR"] })
    )
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write(mapURL))
    .pipe(dest(styleURL))
    .pipe(browserSync.stream());
  done();
}

function js(done) {
  jsFiles.map(function (entry) {
    return browserify({
      entries: [jsSRC + entry],
    })
      .transform(babelify, { presets: ["@babel/preset-env"] })
      .bundle()
      .pipe(source(entry))
      .pipe(
        rename({
          extname: ".min.js",
        })
      )
      .pipe(buffer())
      .pipe(gulpif(options.has("production"), stripDebug()))
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(uglify())
      .pipe(sourcemaps.write("."))
      .pipe(dest(jsURL))
      .pipe(browserSync.stream());
  });
  done();
}
/* INJECT (Includes, JS, CSS) ================================================= */
function include(done) {
  src("./Prototype/Templates/**/*.html")
    .pipe(
      fileinclude({
        prefix: "@@",
        indent: true,
        basepath: "./Prototype/Components/**",
      })
    )
    .pipe(dest("./dist/Prototype/Templates"))
    .pipe(
      inject(
        src(["./dist/css/style.min.css", "./dist/js/main.min.js"], {
          read: false,
        }),
        { relative: true }
      )
    )
    .pipe(dest("./dist/Prototype/Templates"))
    .pipe(browserSync.stream());
  done();
}

function triggerPlumber(src_file, dest_file) {
  return src(src_file).pipe(plumber()).pipe(dest(dest_file));
}

function images() {
  return triggerPlumber(imgSRC, imgURL);
}

function fonts() {
  return triggerPlumber(fontsSRC, fontsURL);
}

function html() {
  return triggerPlumber(htmlSRC, htmlURL);
}
function clean() {
  return del(["./dist"]);
}
function watch_files() {
  watch(styleWatch, series(css, reload));
  watch(jsWatch, series(js, reload));
  watch(imgWatch, series(images, reload));
  watch(fontsWatch, series(fonts, reload));
  watch(htmlWatch, series(html, reload));
  watch(template, series(include, reload));
  watch(htmlComponent, series(include, reload));
  src(jsURL + "main.min.js").pipe(notify({ message: "Gulp is Watching" }));
}

task("css", css);
task("js", js);
task("images", images);
task("fonts", fonts);
task("html", html);
task("default", parallel(css, js, images, fonts, html, include));
task("watch", parallel(browser_sync, watch_files));
