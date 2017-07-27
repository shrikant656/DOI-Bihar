'use strict';

(function(){

	var express = require('express');

	var app = express();
	var path = require('path');

	app.get('/',function(req,res){
		res.sendFile(__dirname + '/index.html');
	});
	app.use(express.static(path.join(__dirname, 'public')));

	app.listen(8089);

	console.log('server has started');

})()
