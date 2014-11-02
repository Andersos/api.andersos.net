var express = require('express');
var bodyParser = require('body-parser');
var hbs  = require('express-handlebars');
var baseUriPath = process.env.BASE_URI_PATH || '';
var routes = require('./lib/routes');

var app = express();

routes.mountAllRoutes(app);

app.engine('handlebars', hbs({
    defaultLayout: 'default',
    extname: '.hbs'
}));
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(baseUriPath, express.static(__dirname + '/public'));

app.use(function(req, res, next) {
    var err = new Error('Not Found! (no route mapped to this URL)');
    err.status = 404;
    next(err);
});

var server = app.listen(app.get('port'), function() {
    console.log('Listening on port %d', server.address().port);
});

module.exports = app;