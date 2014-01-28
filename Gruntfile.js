"use strict";

module.exports = function(grunt) {

grunt.initConfig({
   less: {
      application: {
         options: {
            yuicompress: true
         },
         files: {
            "dist/css/script.min.css": "assets/less/script.less"
         }
      }
   },
   markdown: {
       all: {
         files: [
           {
             src: 'assets/md/script.md',
             dest: 'dist/index.html'
           }
         ]
       },
	   options: {
		   template: 'assets/templates/script.jst'
	   }
   }
});

grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-markdown');

grunt.registerTask('default', ['less', 'markdown']);

};