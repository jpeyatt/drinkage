(function(){

	angular.module('DrinkageApp')

		.service('Common', function(){

			this.times = [
				{ value: '10:00', text: '10:00 A.M.'},
				{ value: '11:00', text: '11:00 A.M.'},
				{ value: '12:00', text: '12:00 P.M'},
				{ value: '13:00', text: ' 1:00 P.M'},
				{ value: '14:00', text: ' 2:00 P.M'},
				{ value: '15:00', text: ' 3:00 P.M'},
				{ value: '16:00', text: ' 4:00 P.M'},
				{ value: '17:00', text: ' 5:00 P.M'},
				{ value: '18:00', text: ' 6:00 P.M'},
				{ value: '19:00', text: ' 7:00 P.M'},
				{ value: '20:00', text: ' 8:00 P.M'},
				{ value: '21:00', text: ' 9:00 P.M'},
				{ value: '22:00', text: '10:00 P.M'},
				{ value: '23:00', text: '11:00 P.M'},
				{ value: '24:00', text: '12:00 A.M'},
				{ value: '01:00', text: ' 1:00 A.M'},
				{ value: '02:00', text: ' 2:00 A.M'},
			];

			this.hhDescriptionPlaceholder = "Add a short description about this happy hour. Ex: $5 Draft Beers.";

			this.days = [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
				"Sunday"
			];

			this.states = [
				"AL",
				"AK",
				"AZ",
				"AR",
				"CA",
				"CO",
				"CT",
				"DE",
				"FL",
				"GA",
				"HI",
				"ID",
				"IL",
				"IN",
				"IA",
				"KS",
				"KY",
				"LA",
				"ME",
				"MD",
				"MA",
				"MI",
				"MN",
				"MS",
				"MO",
				"MT",
				"NE",
				"NV",
				"NH",
				"NJ",
				"NM",
				"NY",
				"NC",
				"ND",
				"OH",
				"OK",
				"OR",
				"PA",
				"RI",
				"SC",
				"SD",
				"TN",
				"TX",
				"UT",
				"VT",
				"VA",
				"WA",
				"WV",
				"WI",
				"WY"
			];

		});

})();
