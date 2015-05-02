angular.module('MyApp', ['ui.calendar'])
	.controller('MainController', function($scope) {
		var events = [
			{ title: "Mom's Birthday", start: new Date(2015, 4, 10) },
			{ title: "Anniversary Party", start: new Date(2015, 4, 19, 19, 30), end: new Date(2015, 4, 19, 19, 30), allDay: false },
			{ title: "Business Conference", start: new Date(2015, 4, 22), end: new Date(2015, 4, 24) }
		];
		$scope.eventSources = [events];

		$scope.calOptions = {
			editable: true,	// to make draggable
			header: {
				left: 'prev',	// next prev title today
				center: 'title',
				right: 'next'
			}
		};
	});