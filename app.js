var app = require('express')();
var http = require('http').Server(app);
var db = require('./config/db');
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/html/app.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(8080, function() {
  console.log('listening on *:8080');
});