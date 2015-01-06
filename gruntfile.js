module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    banner: '/*!\n' +
      ' * <%= pkg.name %> - v<%= pkg.version %>\n' +
      ' * <%= pkg.description %>\n' +
      ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n'+
      ' * <%= pkg.license %> license\n'+
      ' */\n\n',

    sprite: {
      gameicons: {
        src: 'icons/*.png',
        dest: 'gameicons.png',
        destCss: 'gameicons.css',
        padding: 4,
        cssTemplate: 'templates/icons.mustache'
      }
    },

    concat: {
      dist: {
        src: ['gameicons.css'],
        dest: 'gameicons.css',
      },
      options: {
        banner: '<%= banner %>'
      }
    }

  });

  require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['sprite', 'concat']);

};