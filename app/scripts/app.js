'use strict';
/**
 * @ngdoc overview
 * @name portfolio
 * @description
 *
 * Main module of the application.
 */
angular
  .module('portfolio', [
    'ngAnimate',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'hljs'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, hljsServiceProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    hljsServiceProvider.setOptions({
      tabReplace: '    '
    });
    $stateProvider
      .state ('frame', {
        abstract: true,
        url: '/',
        templateUrl: 'views/frame.html',
        controller: 'FrameCtrl'
      })
      .state ('navigation', {
        abstract: true,
        parent: 'frame',
        templateUrl: 'views/navigation.html'
      })
      .state('home', {
        url: '',
        parent: 'frame',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('demos', {
        url: 'demos',
        templateUrl: 'views/demos.html',
        parent: 'frame',
        controller: 'DemosCtrl'
      })
      .state('projects', {
        url: 'projects',
        templateUrl: 'views/projects.html',
        parent: 'frame',
        controller: 'ProjectsCtrl'
      })
      .state('about', {
        url: 'about',
        templateUrl: 'views/about.html',
        parent: 'frame',
        // controller: 'AboutCtrl'
      })
      .state('log', {
        url: 'log',
        templateUrl: 'views/log.html',
        parent: 'frame',
        // controller: 'LogCtrl'
      }); 
  }).run(function($rootScope){
  $rootScope.$on('$stateChangeSuccess', function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
});
