(function() {
	var app = require('express')();
	var http = require('http').Server(app);
	var path = require('path');
	var logger = require('morgan');
	var bodyParser = require('body-parser');
	var cookieParser = require('cookie-parser');
	var db = require('./config/db');

//engine setup
	app.set('views', path.join(__dirname, 'views'));
	app.engine('html', require('ejs').renderFile);
	app.set('viewEngine', 'html');

	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(cookieParser());
	app.use(express.static(path.join(__dirname, '../client')));

	app.get('/', function (request, response) {
		response.sendFile(__dirname + '/html/index.html');
	});

	http.listen(8080, function () {
		console.log('listening on *:8080');
	});

}());

