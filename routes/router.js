var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/todo', function(req, res){
    res.render('todo');
});

module.exports = router;