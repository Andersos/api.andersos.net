var express = require('express');
var xml2js = require('xml2js');
var hbs = require('express-hbs');
var request = require('request');
var app = express();
var parser = new xml2js.Parser();
var baseUriPath = process.env.BASE_URI_PATH || '';

app.engine('hbs', hbs.express3({
    layoutsDir: __dirname + '/views/_layouts',
    defaultLayout: __dirname + '/views/_layouts/default.hbs',
    beautify: true
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.set('port', (process.env.PORT || 3000));
app.use(baseUriPath, express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('index');
});

app.get('/todo', function(req, res){
    res.render('todo');
});

app.get('/api', function(req, res){
    res.json({'books':'api/books'});
});

app.get('api/music', function(req, res){
    var topartists;
    request(
        'https://ws.audioscrobbler.com/2.0/user/AndersOSandvik/topartists.xml',
        function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(parser.parseString(body));
            //console.log(topartists);
        }
    });

    res.render('music', {
        topartists: topartists
    });
});

app.get('/api/books', function(req, res){
    res.json({'Books':'Book'});
});

var server = app.listen(app.get('port'), function() {
    console.log('Listening on port %d', server.address().port);
});