require('newrelic');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.get('/', function(request, response){
  response.send('Hello World');
});

app.get('/', function(request, response){
  response.send('Hello World');
});

var server = app.listen(app.get('port'), function() {
    console.log('Listening on port %d', server.address().port);
});