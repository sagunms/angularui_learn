angular.module('MyApp', ['ui.bootstrap'])
	.controller('MainController', function($scope) {
		$scope.sections = [
			{ heading: "First Dynamic Section", content: "This is the first dynamic section content" },
			{ heading: "Second Dynamic Section", content: "This is the Second dynamic section content" },
			{ heading: "Third Dynamic Section", content: "This is the Third dynamic section content" },
			{ heading: "Fourth Dynamic Section", content: "This is the Fourth dynamic section content" },
			{ heading: "Fifth Dynamic Section", content: "This is the Fifth dynamic section content" },
			{ heading: "Sixth Dynamic Section", content: "This is the Sixth dynamic section content" },
		];
	});