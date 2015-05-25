var Data = require('./models/data');

module.exports = function(app) {
	// server routes ===================
	app.get('/api/nerds', function(request, response) {
		Data.find(function(error, data) {
			if (error)
				response.send(error);
			response.json(data);
            });
        });

	//app post to do here

	//app delete to do here

	// frontend routes ===================
	app.get('*', function(request, response) {
            response.sendfile('./html/app.html');
        });
};