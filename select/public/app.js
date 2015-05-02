angular.module('MyApp', ['ui.select'])
	.controller('MainController', function($scope) {
		$scope.employee = {};
		$scope.employees = [
			{ name: "Sagun Shrestha", email: "sagun@shrestha.com" },
			{ name: "Jon Abitz", email: "jon@abitz.com" },
			{ name: "Sergio Cabrera", email: "sergio@cabrera.com" },
			{ name: "Bidhan Adhikari", email: "bidhan@adhikari.com" },
			{ name: "Sibesh Dangol", email: "sibesh@dangol.com" }
		];
	});