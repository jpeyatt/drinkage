(function(){

	angular.module('DrinkageApp')
		.controller('EditVenueCtrl', ['$scope', 'Venues', '$routeParams', 'Common', '$location', function($scope, Venues, $routeParams, Common, $location){

			$scope.days = Common.days;
			$scope.times = Common.times;
			$scope.hhDescriptionPlaceholder = Common.hhDescriptionPlaceholder;
			var venueId = $routeParams.id;

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
		    	$scope.newVenue = {};
			};

			$scope.addNewHappyHour = function() {
				$scope.editVenue.happyHours.push($scope.newHappyHour);
				$scope.newHappyHour = {};
			};

			$scope.saveVenue = function(){
				var editedVenue = $scope.editVenue;
				Venues.update(editedVenue)
					.then(function(res){
						//$location.path('#/venues');
						console.log(res);
						$scope.resposne = res;
					}, function(err){
						console.log(err);
					});
			};

		}]);
})();
