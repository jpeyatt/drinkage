// python -m SimpleHTTPServer 8000

(function(){

	angular.module('DrinkageApp', ['ngRoute'])

		.config(function($routeProvider){
			$routeProvider
				.when('/venues', {
					templateUrl: '/app/views/venues/list.html',
					controller: 'ListVenuesCtrl'
				})
				.when('/venues/create', {
					templateUrl: '/app/views/venues/create.html',
					controller: 'CreateVenueCtrl'
				})
				.when('/venues/:id', {
					templateUrl: '/app/views/venues/show.html',
					controller: 'ShowVenueCtrl'
				})
				.when('/venues/edit/:id', {
					templateUrl: '/app/views/venues/edit.html',
					controller: 'EditVenueCtrl'
				})
				.otherwise('/venues');
		});

})();