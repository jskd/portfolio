// Include gulp
var gulp = require('gulp'),
	runSequence = require('run-sequence');

require('require-dir')('..', {recurse: true});

// Install bower dependencies and place them to dev folders
gulp.task('start',
	gulp.series(
		'shell:bower',
		'bower:main',
		'clean:gitkeep'
  )
);

// Dev task with static server
gulp.task('dev',
	gulp.series(
		// 'coffee:main',
		'rigger:main',
		'sass:main',
		// 'stylus:main',
		'postcss:dev',
		'cmq:main',
		'pug:main',
		'sync:helpers',
		'sync:fonts',
		'sync:images',
		'browserSync:server',
		'watch'
  )
);

// Build task
gulp.task('build',
	gulp.series(
    'imagemin:main',
		'uglify:main',
		'postcss:build',
		'htmlmin:main',
		'browserSync:server'
  )
);

// Regenerate and build project by running all tasks
gulp.task('rebuild',
	gulp.series(
		// 'coffee:main',
		'rigger:main',
		'sass:main',
		// 'stylus:main',
		'postcss:dev',
		'cmq:main',
		'pug:main',
		'sync:helpers',
		'sync:fonts',
		'sync:images',
		'imagemin:main',
		'uglify:main',
		'postcss:build',
		'htmlmin:main'
  )
);

// Run server without watching for changes
gulp.task('server',
  gulp.series(
    'browserSync:server'
  )
);
