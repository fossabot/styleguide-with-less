const gulp = require("gulp"); 
const less = require("gulp-less");
const clean = require("gulp-clean");
const rename = require("gulp-rename");
const minify = require("gulp-minify-css"); 

gulp.task("clean:css", function() {
    return gulp.src("dist/css", { read: false })
        .pipe(clean())
});

gulp.task("build:css", ["clean:css"], function(){ 
    return gulp.src(["src/less/all.less"])
    .pipe(less())
    .pipe(minify({}))
    .pipe(rename("style.css"))
    .pipe(gulp.dest("./dist/css")); 
}); 

gulp.task("watch", ["build:css"], function () { 
    gulp.watch("src/less/**/*.less", ["less"]); 
});