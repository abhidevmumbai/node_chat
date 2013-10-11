var express = require('express'),
	app = express(),
	port = 3700,
	usernames = {};


app.set('views', __dirname + '/tpl');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);

app.get('/', function(req, res){
	res.render("chat");
});

//Tells expressjs where to look for custom resource files
app.use(express.static(__dirname + '/public'));

//Using the socket.io for communication
var io = require('socket.io').listen(app.listen(port));

io.sockets.on('connection', function(socket){

	socket.emit('updatechat', {'type':'server', 'message': 'Welcome to Node chat!!!'});
	
	// when the client emits 'sendchat', this listens and executes
	socket.on('sendchat', function(data){
		// we tell the client to execute 'updatechat' with 2 parameters
		io.sockets.emit('updatechat', {'type':'client', 'username': socket.username, 'message': data});
	});

	//When the client emits 'adduser', this listens and executes
	socket.on('adduser', function(username){
		// we store the username in the socket session for this client
		socket.username = username;
		// add the client's username to the global list
		usernames[username] = username;
		// echo to client they've connected
		socket.emit('updatechat', {'type': 'server', 'message': 'you have connected'});
		// echo globally (all clients) that a person has connected
		socket.broadcast.emit('updatechat', {'type':'server', 'message': username + ' has connected'});
		// update the list of users in chat, client-side
		io.sockets.emit('updateusers', usernames);
	});

	// when the user disconnects.. perform this
	socket.on('disconnect', function(){
		// remove the username from global usernames list
		delete usernames[socket.username];
		// update list of users in chat, client-side
		io.sockets.emit('updateusers', usernames);
		// echo globally that this client has left
		socket.broadcast.emit('updatechat', {'type':'server', 'message': socket.username + ' has disconnected'});
	});
});
console.log('Listening to port '+port);