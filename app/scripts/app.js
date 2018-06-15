'use strict';

/**
 * @ngdoc overview
 * @name wistiaUploadDemo
 * @description
 * # wistiaUploadDemo
 *
 * Main module of the application.
 */
angular
  .module('wistiaUploadDemo', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/wistia', {
        templateUrl: 'views/wistia.html',
        controller: 'WistiaCtrl',
        controllerAs: 'wistia'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
  }]);
