var express = require('express');
var app = express();

const httpPort = 8080;

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || httpPort;

// set the view engine to ejs -> html
app.set('view engine', 'html');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));


// set the home page route
app.get('/', function(req, res) {
	// ejs render automatically looks in the views folder
	res.render('index');
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});