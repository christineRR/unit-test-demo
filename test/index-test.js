var e = require('expect.js');
var app = require('../lib');

describe('add', function () {

  it('1+1=2', function () {
    e(app(1, 1)).to.be(2);
  });

});