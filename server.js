require('newrelic');
var express = require('express');
var favicon = require('serve-favicon');
var app = express();

app.set('port', (process.env.PORT || 3000));
app.use(favicon(__dirname + '/public/favicon.ico'));

app.get('/', function(req, res){
  res.send('Hello World');
});

var server = app.listen(app.get('port'), function() {
    console.log('Listening on port %d', server.address().port);
});