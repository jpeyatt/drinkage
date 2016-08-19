(function(){

	angular.module('DrinkageApp')
		.controller('ShowVenueCtrl', ['$scope', 'Venues', '$routeParams', function($scope, Venues, $routeParams){
			$scope.loading = true;
			var venueId = $routeParams.id;

			function getVenue() {
				Venues.getVenue(venueId)
					.then(function(res){
						$scope.venue = res.data;
						$scope.loading = false;
					}, function(err){
						console.log(err);
						$scope.loading = false;
					})
			};
			getVenue();


		}]);
})();
