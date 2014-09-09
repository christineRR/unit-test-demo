var e = require('expect.js');
var request = require('supertest')
var app = require('../lib/app');

describe('Testing / Spec Frameworks app', function () {

  before(function (done) {
    app.listen(1234, done);
  });

  after(function (done) {
    app.close(done);
  });

  it('GET / show the title, a loading container', function (done) {
    request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', 'text/html')
    .end(function (err, res) {
      e(err).to.be(null);
      var body = res.text;
      e(body).to.contain('<title>nodejs - Testing / Spec Frameworks</title>');
      e(body).to.contain('<h2>Testing / Spec Frameworks</h2>');
      e(body).to.contain('<div id="container">loading...</div>');
      done();
    });
  });

  it('GET /nopage page not found', function (done) {
    request(app)
    .get('/nopage')
    .expect(200)
    .expect('Content-Type', 'text/html')
    .end(function (err, res) {
      e(err).to.be(null);
      var body = res.text;
      e(body).to.be('Page not found');
      done();
    });
  });

  it('GET /list show the frameworks list, in json data', function (done) {
    request(app)
    .get('/list')
    .expect(200)
    .expect('Content-Type', 'application/json')
    .end(function (err, res) {
      e(err).to.be(null);
      var body = JSON.parse(res.text);
      e(body).to.have.length(5);
      done();
    });
  });

});