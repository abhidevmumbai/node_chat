$('document').ready(function(){
	var socket = io.connect('http://localhost:3700'),
		conversation = $('#conversation');

		// on connection to server, ask for user's name with an anonymous callback
		socket.on('connect', function(){
			// call the server-side function 'adduser' and send one parameter (value of prompt)
			socket.emit('adduser', prompt("What's your name?"));
		});

		// listener, whenever the server emits 'updatechat', this updates the chat body
		socket.on('updatechat', function (data) {
			if(data){
				if(data.type == 'server'){
					conversation.append('<div class="server_msg box box-green"><b>'+data.message + '</b></div>');	
				}else if(data.type == 'client'){
					conversation.append('<div class="client_msg box box-blue"><b>'+data.username + ':</b> ' + data.message + '</div>');	
				}
				conversation.scrollTop(conversation[0].scrollHeight);
			}
			return;
		});

		// listener, whenever the server emits 'updateusers', this updates the username list
		socket.on('updateusers', function(data) {
			console.log(data);
			$('#users').empty();
			$.each(data, function(key, value) {
				$('#users').append('<div>' + key + '</div>');
			});
		});

		// when the client clicks SEND
		$('#chatsend').click( function() {
			var message = $('#msg').val();
			if(message != ''){
				// tell server to execute 'sendchat' and send along one parameter
				socket.emit('sendchat', message);
				$('#msg').val('');
			}
		});

		// when the client hits ENTER on their keyboard
		$('#msg').keypress(function(e) {
			if(e.which == 13) {
				$(this).blur();
				$('#chatsend').click();
				$('#msg').focus();
			}
		});

});
