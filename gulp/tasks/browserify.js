'use strict';

module.exports = function () {
	$.gulp.task('browserify', function () {
		return $.browserify({
			entries:'source/js/app.js',
			debug: true
		})
			.bundle()
			.pipe($.source('app.js'))
			.pipe($.buffer())
			.pipe($.gp.sourcemaps.init({loadMaps: true}))
			.pipe($.gp.babel({
				presets: ['es2015']
			}))
			.pipe($.gp.uglify())
			.pipe($.gp.sourcemaps.write())
			.pipe($.gulp.dest($.config.root + '/assets/js'));
	});
};