module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            dist: {
                files: {
                    'js/script.min.js': 'js/script.js',
                    'js/modern.min.js': 'js/modern.js'
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/'
                }]
            }
        },
        compass: {
           dist: {
                 options: {
                   config: 'sass/config.rb'
             }
           },
        },
        autoprefixer: {
            single_file: {
                // options: {
                //     browsers: ['last 4 versions'] // more codenames at https://github.com/ai/autoprefixer#browsers
                // },
                src: 'css/style.css',
                dest: 'css/style.css'
            }
        },
        svgmin: {
                options: {
                    plugins: [{
                        removeViewBox: false
                    }, {
                        removeUselessStrokeAndFill: false
                    }, {
                        convertPathData: {
                            straightCurves: false
                        }
                    }, {
                        cleanupIDs: false
                    }]
                },
                dist: {
                    files: [{
                        expand: true,
                        cwd: 'img',
                        src: ['*.svg'],
                        dest: 'img'
                    }]
                }
        },
        svgstore: {
            options: {},
            default : {
                files: {
                    'img/sprite.svg': ['img/svg/*.svg'],
                },
            },
        },
        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                }
            },
            images: {
                files: ['img/**/*.{png,jpg,gif}'],
                tasks: ['newer:imagemin:dynamic'],
                options: {
                    spawn: false,
                }
            },
            // svgmin: {
            //     files: ['img/**/*.svg'],
            //     tasks: ['newer:svgmin:dist'],
            //     options: {
            //         spawn: false,
            //     }
            // },
            sass: {
                files: ['sass/*.scss'],
                tasks: ['compass', 'autoprefixer']
            },
            livereload: {
                files: ['css/*.css', '*.html', '*.php', 'inc/*.php', 'js/*.js', 'img/*.svg'],
                options: { livereload: true }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['uglify', 'imagemin', 'watch', 'compass', 'autoprefixer', 'svgmin', 'svgstore']);
};