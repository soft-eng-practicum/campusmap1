'use strict';

angular.module('myApp.view1', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', '$uibModal', function($scope, $http, $uibModal) {
	$('map').imageMapResize();
	var $ctrl = this;
	$http.get('/buildings.json').then(function(response) {
		$scope.buildings = response.data.buildings;

		$('#buildingb').click(function() {
			console.log('test');
			$scope.showModal();
		});
	});

	$scope.showModal = function() {
		$uibModal.open({
			animation: true,
			templateUrl: 'modal.html',
			controller: 'ModalInstanceCtrl',
			scope: $scope
		})
	};



}])

.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	}
	$scope.buildingB = $scope.buildings[1];
	console.log($scope.buildingB);
}]);

