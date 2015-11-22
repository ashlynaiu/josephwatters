'use strict';

/**
 * @ngdoc function
 * @name portfolio.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolio
 */
angular.module('portfolio')
  .controller('CodeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
