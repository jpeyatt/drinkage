var express = require('express');
var Venue = require('../models/Venue.js')

module.exports = (function() {
	var api = express.Router();

	// get all venues
	api.get('/venues', function(req, res){
		Venue.find(function(err, venues){
			if(err)
				res.send(err);

			res.json(venues);
		});
	});

	// get single venue
	api.get('/venues/:venue_id', function(req, res){
		Venue.findById(req.params.venue_id, function(err, venue){
			if(err)
				res.send(err);

			res.json(venue);
		});
	});

	// create venue and send back all venues after creation
	api.post('/venues', function(req, res){

		Venue.create({
			name: req.body.name,
			street: req.body.street,
			street2: req.body.street2,
			city: req.body.city,
			state: req.body.state,
			zip: req.body.zip,
			website: req.body.website,
			happyHours: req.body.happyHours

		}, function(err, venue){
			if (err)
				res.send(err);

			Venue.find(function(err, venues){
				if(err)
					res.send(err);
				res.json(venues);
			});
		});
	});

	// update venue
	api.put('/venues/:venue_id', function(req, res){

		Venue.findByIdAndUpdate(req.params.id, req.body, function(err, venue){
			if (err)
				res.send(err);

			res.json(venue);
		});

	});

	// delete a venue
	api.delete('/venues/:venue_id', function(req, res) {
		Venue.remove({
			_id: req.params.venue_id
		}, function(err, venue) {
			if (err)
				res.send(err);

			Venue.find(function(err, venues){
				if (err)
					res.send(err);
				res.json(venues);
			});
		});
	});
	
	return api;

})();