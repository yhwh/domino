'use strict';

module.exports = function(grunt) {

    // import package.json
    var pkg = grunt.file.readJSON('package.json');

    // StimuliFiles
    var stimuliFiles = [
        // dependencies
        'lib/sizzle/sizzle.js',

        // core
        'src/stimuli.js',
        'src/utils/object.js',
        'src/utils/observable.js',
        'src/utils/scheduler.js',
        'src/browser/support.js',
        'src/browser/viewport.js',
        'src/device/generic.js',
        'src/event/emitter.js',
        'src/event/binder.js',

        // mouse
        'src/device/mouse.js',
        'src/event/synthetizer/mouse.js',
        'src/command/generic.js',
        'src/command/mouse/utils/bounding_rectangle.js',
        'src/command/mouse/utils/bounding_rectangle_offset.js',
        'src/command/mouse/utils/position.js',
        'src/command/mouse/generic.js',
        'src/command/mouse/down.js',
        'src/command/mouse/up.js',
        'src/command/mouse/click.js',
        'src/command/mouse/dblclick.js'

        
    ];


    // GENERATE FILES CONFIGURATION FOR KARMA (DEV AND CI MODE)

    // Shared files loaded by karma test runner
    var sharedTestFiles = [

        {
            pattern: 'node_modules/expect.js/expect.js',
            watched: false
        },

        {
            pattern: 'node_modules/sinon/pkg/sinon.js',
            watched: false
        },

        {
            pattern: 'node_modules/sinon/pkg/sinon-ie.js',
            watched: false
        },

        {
            pattern: 'test/helper/**/*.js'
        }

    ];

    // Files loaded by karma test runner for development
    var testFilesDev = [];

    // Files loaded by karma test runner for continuous integration (build)
    var testFilesBuild = [];

    // add shared files
    sharedTestFiles.forEach(function(shared) {
        testFilesDev.push(shared);
        testFilesBuild.push(shared);
    });

    // Add all stimulis sources for development
    stimuliFiles.forEach(function(stimuliFile) {
        testFilesDev.push({
            pattern: stimuliFile
        });
    });

    // Add freshly build stimuli
    testFilesBuild.push({
        pattern: 'build/' + pkg.name + '-' + pkg.version + '.js'
    });


    // test specs
    var specs = [{
        pattern: 'test/unit/**/*.js'
    }, {
        pattern: 'test/integration/**/*.js'
    }];

    // add specs to both mode
    specs.forEach(function(spec) {
        testFilesDev.push(spec);
        testFilesBuild.push(spec);
    });

    // GRUNT CONFIGURATION
    grunt.initConfig({

        pkg: pkg,

        jshint: {

            files: [

                'Gruntfile.js',
                'src/**/*.js',
                '*.json',
                '.jshintrc',
                'test/**/*.js'
            ],

            options: {

                jshintrc: '.jshintrc'

            }

        },

        jsdoc: {

            dist: {

                src: ['src/**/*.js'],

                options: {
                    destination: 'docs'
                }
            }

        },

        karma: {

            unit: {

                configFile: 'karma.conf.js',

                files: testFilesDev,

                browsers: ['Firefox', 'PhantomJS', 'Chrome', 'Safari', 'IE8 - WinXP', 'IE9 - Win7', 'IE10 - Win7']

            },

            watch: {

                configFile: 'karma.conf.js',

                singleRun: false,

                autoWatch: true,

                files: testFilesDev,

                browsers: ['Firefox', 'PhantomJS', 'Chrome', 'Safari', 'IE8 - WinXP', 'IE9 - Win7', 'IE10 - Win7']

            },

            quickwatch: {

                configFile: 'karma.conf.js',

                singleRun: false,

                autoWatch: true,

                files: testFilesDev,

                browsers: ['PhantomJS']

            },

            quick: {

                configFile: 'karma.conf.js',

                files: testFilesDev,

                browsers: ['PhantomJS']

            },

            coverage: {

                configFile: 'karma.conf.js',

                files: testFilesDev,

                browsers: ['PhantomJS'],

                reporters: ['coverage']

            },

            phantomjsci: {

                configFile: 'karma.conf.js',

                files: testFilesBuild,

                browsers: ['PhantomJS']

            },

            chromeci: {

                configFile: 'karma.conf.js',

                files: testFilesBuild,

                browsers: ['SL_Chrome']

            },

            firefoxci: {

                configFile: 'karma.conf.js',

                files: testFilesBuild,

                browsers: ['SL_Firefox']

            },

            safarici: {

                configFile: 'karma.conf.js',

                files: testFilesBuild,

                browsers: ['SL_Safari']

            },

            ie8ci: {

                configFile: 'karma.conf.js',

                files: testFilesBuild,

                browsers: ['SL_IE8']

            },

            ie9ci: {

                configFile: 'karma.conf.js',

                files: testFilesBuild,

                browsers: ['SL_IE9']

            },

            ie10ci: {

                configFile: 'karma.conf.js',

                files: testFilesBuild,

                browsers: ['SL_IE10']

            }
        },

        bower: {

            install: {

                options: {
                    cleanBowerDir: true
                }
                
            }
        },

        concat: {

            options: {

                stripBanners: true,

                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n' + '\'use strict\';\n',

                process: function(src, filepath) {
                    return '\n// Source: ' + filepath + '\n' +
                        src.replace(/'use strict';\n/gm, '');
                },
            },

            dist: {

                src: stimuliFiles,

                dest: 'build/<%= pkg.name %>-<%= pkg.version %>.js'

            }
        },

         hub: {

            event_tester: {

              src: ['tools/event_tester/Gruntfile.js'],

              tasks: ['jshint', 'build:templates']

            }
        },

        jsduck: {

            main: {
                // source paths with your code
                src: [
                    'src'
                ],

                // docs output dir
                dest: 'docs',

                // extra options
                options: {
                    'title': "Stimuli <%= pkg.version %> Documentation"
                }
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-jsduck');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-hub');

    grunt.registerTask('watchtest', ['karma:watch']);
    grunt.registerTask('quicktest', ['karma:quick']);
    grunt.registerTask('quickwatchtest', ['karma:quickwatch']);
    grunt.registerTask('cov', ['karma:coverage']);
    grunt.registerTask('build', ['jshint', 'bower:install', 'concat:dist']);

};