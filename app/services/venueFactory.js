(function(){
	angular.module('DrinkageApp')
		.factory('Venues', ['$http', function($http){
			
			var devHost = 'http://localhost:8080';
			var urlBase = '/api/venues';
			var dataFactory = {};

			dataFactory.getVenues = function () {
				return $http.get(devHost + urlBase);
			};

			dataFactory.getVenue = function (id) {
				return $http.get(devHost + urlBase + '/' + id);
			};

			dataFactory.create = function(venue) {
				return $http.post(devHost + urlBase, venue);
			};

			dataFactory.update = function(venue) {
				return $http.put(devHost + urlBase + '/' + venue._id, venue);
			};
			
			dataFactory.delete = function(id) {
				return $http.delete(devHost + urlBase + '/' + id);
			};

			return dataFactory;

		}])
})();