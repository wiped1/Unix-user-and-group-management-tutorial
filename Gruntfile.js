"use strict";

module.exports = function(grunt) {

var releaseBranchOptions = {
	app: {
	    options: {
	        //the name of the orphan branch. Default is gh-pages
	        releaseBranch: 'gh-pages',
	        //the name of the remote repository. Default is origin
	        remoteRepository: 'origin',
	        //the name of the output directory. Default is dist
	        distDir: 'dist',
	        //the commit message to be used for the optional commit
	        commitMessage: 'RELEASE',
	        //should files be automatically commited on the orphan branch
	        commit: true,
	        //should the orphan branch be pushed to the remote repository
	        //default is false
	        push: true,
	        //a blacklist of things to keep on the root level. By default only
	        //the .git folder will be kept.
	        blacklist: [
	            '.git'
	        ]
	    }
	}
};

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
   },
   releaseBranchPre: releaseBranchOptions,
   releaseBranch: releaseBranchOptions
});

grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-markdown');
grunt.loadNpmTasks('grunt-release-branch');

grunt.registerTask('default', ['less', 'markdown']);
grunt.registerTask('deploy', ['releaseBranchPre', 'releaseBranch']);

};