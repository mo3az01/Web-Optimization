module.exports = function (grunt) { 

require('load-grunt-tasks')(grunt);

grunt.initConfig({
    minifyHtml: {
        options: {
            cdata: true
        },
        dist: {
            files: {
                'index.html': 'index.html',
                'views/pizza.html':'views/pizza.html'
            }
        }
    },
    cssmin: {
          options: {
            mergeIntoShorthands: false,
            roundingPrecision: -1
          },
    target: {
          files: {
            'css/print.css': 'css/print.css',
            'css/style.css': 'css/style.css'
    }
  }
}
  //   },
  //   uglify: {
  //   my_target: {
  //     files: {
  //       'dist/output.js': ['views/js/main.js']
  //     }
  //   }
  // }
}); 
grunt.registerTask('default', ['cssmin','minifyHtml']);
};