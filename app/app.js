'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'ui.bootstrap'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}])
.controller('mainController', function($scope){

	//buttons

	//define random obj and button values
	$scope.bigData = {};

	$scope.bigData.object1 = false;
	$scope.bigData.object2 = false;
	$scope.bigData.object3 = false;

	//collapse
	$scope.isCollapsed = false;

});
