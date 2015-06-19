/*global module:false*/
module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    watch: {
      scsslint: {
        files: '_scss/**/*.scss',
        tasks: ['scsslint']
      },
      css: {
        files: '_scss/**/*.scss',
        tasks: ['sass']
      }
    },
    sass: {
      dist: {
        files: {
            'assets/css/style.css' : '_scss/style.scss'
        }
      }
    },
    browserSync: {
      bsFiles: {
        src : ['assets/css/style.css', 'index.html', 'main.js']
      },
      options: {
        watchTask: true,
        server: {
          baseDir: "./"
        }
      }
    }
  });

  // Tasks
  grunt.registerTask('default', ['sass', 'browserSync', 'watch']);
  grunt.registerTask('sans-lint', ['sass', 'browserSync', 'watch:css']);
};
