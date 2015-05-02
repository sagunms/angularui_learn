angular.module('MyApp', ['ui.validate'])
	.controller('MainController', function($scope) {
		// $scope.msg = "hello angular ui";
		$scope.validatePassword = function(value) {
			return value === $scope.password
		}
	});