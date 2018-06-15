'use strict';

/**
 * @ngdoc function
 * @name wistiaUploadDemo.controller:WistiaCtrl
 * @description
 * # WistiaCtrl
 * Controller of the wistiaUploadDemo
 */
angular.module('wistiaUploadDemo')
  .controller('WistiaCtrl',['$scope', function ($scope) {
    $scope.access = {
      project: 'cz2bhyafmq',
      password: 'f64579d76f40ab92f5601e2319704aa57876cba89876b9209cd5ba57fd0822f3'
    };
  }]);
