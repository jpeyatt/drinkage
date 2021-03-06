(function(){

	angular.module('DrinkageApp')
		.controller('CreateVenueCtrl', ['$scope', 'Venues', '$location', 'Common', '$mdDialog', function($scope, Venues, $location, Common, $mdDialog){
			var thisCtrl = this;
			$scope.newHappyHours = [];
			$scope.times = Common.times;
			$scope.days = Common.days;
			$scope.states = Common.states;
			$scope.hhDescriptionPlaceholder = Common.hhDescriptionPlaceholder;

		    $scope.createVenue = function() {
		    	var newVenue = $scope.newVenue;
		    	newVenue.happyHours = $scope.newHappyHours;
		    	Venues.create(newVenue)
		    		.then(function(res){
		    			//$scope.venues.push(res);
		    			$location.path('#/venues');
		    			$scope.newVenue = {};

		    		}, function (err) {
		    			console.log(err);
		    		});
			};

			$scope.removeHappyHour = function(day) {
				var index = $scope.newHappyHours.indexOf(day);
  				$scope.newHappyHours.splice(index, 1);     
			};

			$scope.cancelCreate = function() {
				$location.path('#/venues');
		    	$scope.newVenue = {};
			};

			$scope.addNewHappyHour = function() {
				$scope.newHappyHours.push($scope.newHappyHour);
				$scope.newHappyHour = {};
				$mdDialog.cancel();
			};

			$scope.addNewHappyHourModal = function(ev) {
				$mdDialog
					.show({
						//controller: function(){return thisCtrl},
						contentElement: '#addNewHappyHourModal',
						parent: angular.element(document.body),
						targetEvent: ev,
      					clickOutsideToClose:true
					});
			};

			$scope.cancelModal = function() {
				$scope.newHappyHour = {};
				$mdDialog.cancel();
			};

		}]);
})();
