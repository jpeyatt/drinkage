(function(){

	angular.module('DrinkageApp')
		.controller('ListVenuesCtrl', ['$scope', 'Venues', '$location', 'Common', '$mdDialog', function($scope, Venues, $location, Common, $mdDialog){
			$scope.loading = true;
			
			function getVenues() {
				Venues.getVenues()
					.then(function(res){
						$scope.venues = res.data;
						$scope.loading = false;
					}, function(err){
						console.log(err);
						$scope.loading = false;
					})
			};
			getVenues();
			

			$scope.deleteVenue = function(ev, id) {
    		// Appending dialog to document.body to cover sidenav in docs app
    		var confirm = $mdDialog.confirm()
          		.title('Are you sure?')
          		.textContent('Do you really want to delete this venue?')
          		.ariaLabel('Lucky day')
          		.targetEvent(ev)
          		.ok('Delete')
          		.cancel('Cancel');
		    	
		    	$mdDialog.show(confirm).then(function() {
		      		Venues.delete(id).then(function(res){
						var index = $scope.venues.indexOf(res);
						$scope.venues.splice(index, 1);
					}, function(err){
						console.log(err)
					});
		    	}, function() {
		      
		    });
		  };

			$scope.venueClick = function(id){
				$location.path('/venues/' + id);
			};

			$scope.editVenue = function(id){
				$location.path('/venues/edit/' + id);
			};

			$scope.createVenue = function(){
				$location.path('/venues/create');
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
