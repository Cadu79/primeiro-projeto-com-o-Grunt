module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      less: {
        development: {
            files: {
                'main.css': 'main.less'
            }
        },
        production: {
            options: {
                compress: true,
            },
            files: {
                'main.min.css': 'main.less'
            }
        }
      },
      sass: {
        options: {
            implementation: require('sass'),
            sourceMap: true,
            outputStyle: 'compressed'
        },
        dist: {
            options:{
                style: 'compressed'
            },
            files: {
                'main2.css': 'main.scss'
            }
        }
      },
      concurrent: {
        target: ['olaGrunt', 'less', 'sass', 'tarefaDemorada']
      }
    });
  
    grunt.registerTask('olaGrunt', function() {
        const done = this.async();
        setTimeout(function(){
            grunt.log.writeln('Olá Grunt está funcionando!');
            done();
        }, 3000);
    });

    grunt.registerTask('tarefaDemorada', function() {
        const done = this.async();
        setTimeout(function(){
            grunt.log.writeln('Olá Grunt está funcionando!');
            done();
        }, 3000);
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-concurrent');
    
    grunt.registerTask('default', ['concurrent']);
  };