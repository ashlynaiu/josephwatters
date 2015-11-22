'use strict';

/**
 * @ngdoc function
 * @name ashlynPortfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ashlynPortfolioApp
 */
angular.module('portfolio')
  .controller('FrameCtrl', function($state, $scope){
    $scope.$state = $state;
});