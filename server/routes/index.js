(function () {
	'use strict';
	var express = require('express');
	var router = express.Router();
	var mongojs = require('mongojs');
	var database = mongojs('meanTodo', ['todos']);

	router.get('/', function (request, respond) {
		respond.render('index');
	});

	router.post('/api/todos', function (request, response) {
		database.todos.insert(request.body, function (error, data) {
			response.json(data);
		});
	});

	router.put('/api/todos', function (request, response) {
		database.todos.update({
			_id: mongojs.ObjectId(request.body._id)
		}, {
			isCompleted: request.body.isCompleted,
			todo: request.body.todo
		}, {}, function (error, data) {
			response.json(data);
		});
	});

	router.delete('/api/todos/:_id', function (request, response) {
		database.todos.remove({
			_id: mongojs.ObjectId(request.params._id)
		}, '', function (error, data) {
			response.json(data);
		});
	});

	module.exports = router;
});