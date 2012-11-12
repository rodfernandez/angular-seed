/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        meta : {
            version : '0.1.0',
            banner : '/*! PROJECT_NAME - v<%= meta.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* http://PROJECT_WEBSITE/\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
                'YOUR_NAME; Licensed MIT */'
        },
        lint : {
            files : ['grunt.js', 'app/client/js/**/*.js']
        },
        concat : {
            dist : {
                src : ['<banner:meta.banner>', 'app/client/js/**/*.js'],
                dest : 'dist/FILE_NAME.js'
            }
        },
        min : {
            dist : {
                src : ['<banner:meta.banner>', '<config:concat.dist.dest>'],
                dest : 'dist/FILE_NAME.min.js'
            }
        },
        watch : {
            files : '<config:lint.files>',
            tasks : 'lint test'
        },
        jshint : {
            options : {
                curly : true,
                eqeqeq : true,
                immed : true,
                latedef : true,
                newcap : true,
                noarg : true,
                sub : true,
                undef : true,
                boss : true,
                eqnull : true
            },
            globals : {
                jQuery : true
            }
        },
        uglify : {}
    });

    // Default task.
    grunt.registerTask('default', 'lint concat min');

};
