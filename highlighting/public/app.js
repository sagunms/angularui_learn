angular.module('MyApp', ['ui.highlight', 'ngSanitize'])
	.controller('MainController', function($scope) {
		$scope.text = "hello angular uihello angular uihellolo angular uihello angular ui";
	});