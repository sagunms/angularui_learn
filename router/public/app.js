var users = [
	null,
	{ id: 1, name: "Sagun Man Singh Shrestha" },
	{ id: 2, name: "Sergio Cabrera Arismendi" },
	{ id: 3, name: "Bidhan Adhikari" }
];

angular.module('MyApp', ['ui.router'])
	.config(function($stateProvider) {
		$stateProvider.state({
			name: "home",
			url: "/",
			template: "<h1>Home</h1>"
		})
		.state("about", {
			url: "/about",
			template: "<h1>About</h1>"
		})
		.state("user-view", {
			url: "/user/:userId",
			controller: "UserViewController",
			template: "<h1>{{user.name}}</h1> <p>User ID: {{user.id}}</p>"
		});
	})
	.controller("UserViewController", function($scope, $stateParams) {
		$scope.user = users[$stateParams.userId];
	});