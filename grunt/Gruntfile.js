'use strict';
module.exports = function(grunt){
	//引入插件
	grunt.loadNpmTasks('grunt-contrib-uglify');
	//构建任务
	grunt.initConfig({
		uglify:{
			ug1:{
				src:'src/jquery-1.7.2.js',
				dest:'dest/jquery-1.7.2.min.js'
			}
		}
	});
	//注册任务
	grunt.registerTask('default',['uglify']);
};