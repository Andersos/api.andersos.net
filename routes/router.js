var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.redirect('http://blog.andersos.net');
});

router.get('/gtd', function(req, res){
    res.render('gtd');
});

module.exports = router;