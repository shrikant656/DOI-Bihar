module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    ngAnnotate: {
      options: {
          singleQuotes: true
      },
      app: {
          files: {
              'public/grunt-files/scripts/lang-en.js': ['public/scripts/lang-en.js'],
              'public/grunt-files/scripts/lang-hn.js': ['public/scripts/lang-hn.js']
          }
      }
    },

    concat: {
        js: { //target
            src: ['public/grunt-files/scripts/lang-en.js', 'public/grunt-files/scripts/lang-en.js'],
            dest: 'public/grunt-files/scripts/lang-concatnated.js'
        }
    },

    uglify: {
        js: { //target
            src: ['public/grunt-files/scripts/lang-concatnated.js'],
            dest: 'public/grunt-files/scripts/lang-uglified.js'
        }
    },

    cssmin: {
      build: {
        src: 'public/styles/main.css',
        dest: 'public/grunt-files/css/main.min.css'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['ngAnnotate','concat','uglify','cssmin']);

};

