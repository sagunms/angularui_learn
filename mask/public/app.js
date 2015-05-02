angular.module('MyApp', ['ui.mask'])
	.controller('MainController', function($scope) {
		$scope.mask1 = "9999 9999 9999 9999";	// mask for credit card
		$scope.mask2 = "(999) 999-999";	// mask for phone number
		$scope.mask3 = "A9A9***A9A9";	// alphabet+number+any mask pattern
		$scope.val1 = "hello angular ui";
	});

// 9 = number, A = alphabet, * = number/alphabet