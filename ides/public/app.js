angular.module('MyApp', ['ui.codemirror', 'ui.ace'])
	.controller('MainController', function($scope) {
		// CodeMirror Editor options
		$scope.cmOpts = {
			lineNumbers: true,
			indentSize: 4,
			tabSize: 4,
			theme: 'monokai',
			mode: 'javascript'
		};
		// Ace Editor options
		$scope.aceOpts = {
			theme: 'twilight',
			mode: 'html'
		};
	});