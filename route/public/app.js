angular.module('MyApp', ['ngRoute', 'ui.route'])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider.otherwise({
			templateUrl: 'views/main.html',
			controller: 'MainController'
		});

		$locationProvider.html5Mode(true);
	})
	.controller('MainController', function($scope) {
		// $scope.msg = "hello angular ui";
		$scope.routes = ['/route-1', '/route-2', '/route-3'];
	});