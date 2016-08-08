(function(){

	angular.module('DrinkageApp')
		.controller('ListVenuesCtrl', ['$scope', 'Venues', '$location', 'Common', function($scope, Venues, $location, Common){

			function getVenues() {
				Venues.getVenues()
					.then(function(res){
						$scope.venues = res.data;
					}, function(err){
						console.log(err);
					})
			};
			getVenues();

			$scope.deleteVenue = function(id) {
				if (confirm('Are you sure you want to delete this?')) {
					Venues.delete(id).then(function(res){
						var index = $scope.venues.indexOf(res);
						$scope.venues.splice(index, 1);
					}, function(err){
						console.log(err)
					});
				}
			};

			$scope.isDayTrue = function(venue,day){
				var isDayDeclared;
				venue.happyHours.forEach(function(d){
					if(d.day == day)
						isDayDeclared = true;
				})
				return isDayDeclared;
			};

		}]);
})();
