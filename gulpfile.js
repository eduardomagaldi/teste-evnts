var gulp = require('gulp')
	stylus = require('gulp-stylus'),
	connect = require('gulp-connect');

gulp.task('copy', function() {
	gulp.src([
		'./node_modules/flickity/dist/flickity.min.css',
		'./node_modules/angular-material/angular-material.min.css',

		'./node_modules/flickity/dist/flickity.pkgd.min.js',

		'./node_modules/angular/angular.min.js',
		'./node_modules/angular-animate/angular-animate.min.js',
		'./node_modules/angular-aria/angular-aria.min.js',
		'./node_modules/angular-material/angular-material.min.js'
	])
	.pipe(gulp.dest('./vendor/'));
});

gulp.task('css', function () {
	return gulp.src('./src/css/main.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./css/'));
});

gulp.task('watch', function () {
	gulp.watch(['./src/css/**/*'], ['process']);
});
 
gulp.task('webserver', function () {
	connect.server({
		name: 'app',
		root: ['./'],
		port: 8000,
		livereload: true
	});
});

gulp.task('process', ['css']);
gulp.task('default', ['copy', 'process', 'watch', 'webserver']);
