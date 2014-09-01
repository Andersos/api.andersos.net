//require('newrelic');
var express = require('express');
var xml2js = require('xml2js');
var favicon = require('serve-favicon');
var hbs = require('express-hbs');
var request = require('request');
var app = express();
var parser = new xml2js.Parser();

app.engine('hbs', hbs.express3({
    layoutsDir: __dirname + '/views/_layouts',
    defaultLayout: __dirname + '/views/_layouts/default.hbs',
    beautify: true
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.set('port', (process.env.PORT || 3000));
app.use('/public', express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico'));

app.get('/', function(req, res){
    res.render('index');
});

app.get('/music', function(req, res){
    var topartists;
    request('https://ws.audioscrobbler.com/2.0/user/AndersOSandvik/topartists.xml', function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(parser.parseString(body));
            //console.log(topartists);
        }
    });

    res.render('music', {
        topartists: topartists
    });
});

var server = app.listen(app.get('port'), function() {
    console.log('Listening on port %d', server.address().port);
});