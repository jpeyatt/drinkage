(function(){

	angular.module('DrinkageApp')
		.controller('ShowVenueCtrl', ['$scope', 'Venues', '$routeParams', function($scope, Venues, $routeParams){

			var venueId = $routeParams.id;

			function getVenue() {
				Venues.getVenue(venueId)
					.then(function(res){
						$scope.venue = res.data;
					}, function(err){
						console.log(err);
					})
			};
			getVenue();


		}]);
})();
