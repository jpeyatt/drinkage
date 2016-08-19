var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var webserver = require('gulp-webserver');
var open = require('gulp-open');

gulp.task('apiServer', function(){
	nodemon({
		script: 'server.js',
		ext: 'js'
	});
});

gulp.task('webServer', function(){
	gulp.src('./')
		.pipe(webserver({
			livereload: true,
			port: 8000,
			fallback: 'index.html'
		}));
});

gulp.task('open', function(){
	var options = {
		uri: 'http://localhost:8000',
		app: '/Applications/Google\ Chrome.app'
	};
	gulp.src('./index.html')
	.pipe(open(options));
});

gulp.task('default', ['apiServer', 'webServer', 'open']);