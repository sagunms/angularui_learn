angular.module('MyApp', ['ui.unique'])
	.controller('MainController', function($scope) {
		$scope.items = [
			{id: 1, firstName: 'Jon', lastName: 'Abitz'},
			{id: 2, firstName: 'Sergio', lastName: 'Cabrera'},
			{id: 3, firstName: 'Jon', lastName: 'Shena'},
			{id: 4, firstName: 'Sibesh', lastName: 'Dangol'},
			{id: 5, firstName: 'Sugan', lastName: 'Shrestha'},
			{id: 6, firstName: 'Bidhan', lastName: 'Adhikari'},
			{id: 7, firstName: 'Sagun', lastName: 'Shrestha'}
		];
	});