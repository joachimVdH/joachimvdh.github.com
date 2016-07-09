module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		compass: {
			dist:{
				options: {
					outputStyle: 'compressed',
					sassDir: 'sass',
					cssDir: 'css',
				}
			}
		},
		
		autoprefixer: {
			options: {
				// Task-specific options go here.
			},
			your_target: {
				// Target-specific file lists and/or options go here.
			},
		},
		
		watch: {
			sass: {
				files: ['**/*.{scss,sass}'],
				tasks: ['compass']
			},
			/* watch and see if our javascript files change, or new packages are installed */
			// js: {
			// 		        files: ['assets/js/main.js', 'components/**/*.js'],
			// 		        tasks: ['uglify']
			// 		      },
			/* watch our files for change, reload */
			livereload: {
				// , 'js/{main.min.js, plugins.min.js}'
				files: ['*.html', 'css/*.css', 'img/*'],
				options: {
					livereload: true
				}
			},
		}
	});

	// load all grunt tasks
	//require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.registerTask('default', 'watch');

};
