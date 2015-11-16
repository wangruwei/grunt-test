'use strict';
module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.initConfig({
        uglify:{
            ug1:{
                src:'src/jquery-1.7.2.js',
                dest:'dest/jquery-1.7.2.min.js'
            }
        },
        concat:{
            con1:{
                src:'src/*.css',
                dest:'dest/all.css'
            }
        },
        cssmin:{
            css1:{
                src:'dest/all.css',
                dest:'dest/all.min.css'
            }
        }
    });
    grunt.registerTask('default',['uglify','concat','cssmin']);
};
