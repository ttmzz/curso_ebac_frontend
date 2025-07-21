const {option, task} = require("grunt");

module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      less: {
        development: {
           files: {
            'dev/styles/style.css': 'src/styles/style.less'
           }
        },
      production: {
        options: {
            compress: true,
        },
        files: {
            'dist/styles/style.min.css': 'src/styles/style.less'
        }
      }
     },

     watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            },
            html: {
                files: ['src/index.html'],
                tasks: ['replace:dev']
            }
        },

         htmlmin: {
                    dist: {
                        options: {
                            removeComments: true,
                            collapseWhitespace: true
                        },
                        files: {
                            'dist/index.html': 'src/index.html',
                        }
                    }
                },

        clean: ['prebuild'],
                uglify: {
                    target: {
                        files: {
                            'dist/scripts/index.min.js': 'src/scripts/index.js'
                        }
                    }
                }
    });


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production','htmlmin:dist', 'clean', 'uglify']);
}
