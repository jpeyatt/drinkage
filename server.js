// node server.js

// Setup ==========================================

var express 		= require('express'),
	app 			= express(),
	router			= express.Router(),
	mongoose		= require('mongoose'),
	morgan 			= require('morgan'),
	bodyParser 		= require('body-parser'),
	methodOverride 	= require('method-override');


// Configuration ==================================

mongoose.connect('mongodb://admin:admin@ds011765.mlab.com:11765/drinkage');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());


// Access Headers ==========================

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


// Listen (start app with node server.js) ======================================

app.listen(8080);
console.log("App listening on port 8080");


// Models ====================

var Venue = require('./server/models/Venue.js')



// Routes ===============================

var venueRoutes = require('./server/routes/venueRoutes.js')
app.use('/api', venueRoutes);
