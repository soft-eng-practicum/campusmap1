'use strict';

angular.module('myApp.service', ['ngRoute', 'ui.bootstrap'])
	.factory('Service', function($http) {
		var savedData = {};
		function set(data) {
			savedData = data;
		}
		function get() {
			return savedData;
		}

		return {
			set: set,
			get: get
		}
	});