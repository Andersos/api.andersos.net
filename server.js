var express = require('express');
var hbs  = require('express-handlebars');
var routes = require('./lib/routes');

var app = express();

app.engine('.hbs', hbs({
    defaultLayout: 'default',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use(express.static(__dirname + '/public'));

routes.mountAllRoutes(app);

app.use(function(req, res, next) {
    var err = new Error('Not Found!');
    err.status = 404;
    next(err);
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log('Listening on port %d', app.get('port'));
});

module.exports = app;