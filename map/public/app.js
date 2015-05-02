function onGoogleReady() {
	angular.bootstrap(document.getElementsByTagName('body')[0], ['MyApp']);
}

angular.module('MyApp', ['ui.map'])
	.controller('MainController', function($scope) {
		$scope.mapOptions = {
			// center: new google.maps.LatLng(27.704607, 85.30759), // Basantapur Durbar Square
			center: new google.maps.LatLng(-33.8569381, 151.2153315), // Sydney Opera House
			zoom: 17,
			mapTypeId: google.maps.MapTypeId.SATELLITE
		};

		$scope.addMarker = function(event, params) {
			new google.maps.Marker({
				map: $scope.MyMap,
				position: params[0].latLng
			});
		};
	});