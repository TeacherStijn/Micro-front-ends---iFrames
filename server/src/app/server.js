"use strict";

/* Express web server instellen */
const express = require('express');
const server = express();

const cors = require('cors');
server.use(cors());
server.options('*', cors());	// voor nu even helemaal open zetten

const LOCAL_PORT = "1234";

let dataSet = [];

server.use(express.static('scripts'))

// STATIC FILES HOSTEN:
server.get(['/','/index.html'], function(request, response) {
    console.log('Get of /');
	
	response.sendFile(__dirname + '/index.html');
});

server.get(['/','/main.js'], function(request, response) {
    console.log('Get of /main.js');

    response.sendFile(__dirname + '/main.js');
});

server.get(['/','/cartLib.html'], function(request, response) {
    console.log('Get of /cartLib.html');

    response.sendFile(__dirname + '/cartLib.html');
});

server.get(['/','/listLib.html'], function(request, response) {
    console.log('Get of /listLib.html');

    response.sendFile(__dirname + '/listLib.html');
});

/* Webserver starten */
server.listen(LOCAL_PORT, function() {
    console.log('Server started!');	
});
