var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var venueSchema = new Schema({
	name: String,
	street: String,
	street2: String,
	city: String,
	state: String,
	zip: String,
	website: String,
	happyHours: [{
			day: String,
			startTime: String,
			endTime: String,
			description: String,
			beer: Boolean,
			wine: Boolean,
			cocktails: Boolean
		}]
});

module.exports = mongoose.model('Venue', venueSchema);
