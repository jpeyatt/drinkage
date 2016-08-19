(function(){

	angular.module('DrinkageApp')
		.controller('EditVenueCtrl', ['$scope', 'Venues', '$routeParams', 'Common', '$location', function($scope, Venues, $routeParams, Common, $location){

			$scope.days = Common.days;
			$scope.times = Common.times;
			$scope.hhDescriptionPlaceholder = Common.hhDescriptionPlaceholder;
			var venueId = $routeParams.id;
			$scope.editVenue = {};

			function getVenue() {
				Venues.getVenue(venueId)
					.then(function(res){
						$scope.editVenue = res.data;
					}, function(err){
						console.log(err);
					})
			};
			getVenue();

			$scope.removeHappyHour = function(day) {
				var index = $scope.editVenue.happyHours.indexOf(day);
  				$scope.editVenue.happyHours.splice(index, 1);     
			};

			$scope.cancelEdit = function() {
				$location.path('#/venues');
			};

			$scope.addNewHappyHour = function() {
				$scope.editVenue.happyHours.push($scope.newHappyHour);
				$scope.newHappyHour = {};
			};

			$scope.saveVenue = function(){
				var editedVenue = $scope.editVenue;
				Venues.update(editedVenue)
					.then(function(res){
						$location.path('#/venues');
					}, function(err){
						console.log(err);
					});
			};

		}]);
})();
