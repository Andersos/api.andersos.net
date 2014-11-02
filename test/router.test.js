var request = require('supertest');

describe('The routes', function () {

    var server;

    before(function () {
        server = require('../server.js');
        request = request('http://localhost:3000');
    });

    it('has a robots.txt file', function (done) {
        request
        .get('/robots.txt')
        .expect('Content-Type', 'text/plain; charset=UTF-8')
        .expect('Content-Length', '69')
        .expect(200, done);
    });

    it('renders /', function (done) {
        request
        .get('/')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200, done);
    });

});