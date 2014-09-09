var http = require('http');
var parse = require('url').parse;
var fs = require('fs');
var path = require('path');

var app = http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  var urlObj = parse(req.url, true);

  if (urlObj.pathname === '/') {
    var page = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
    res.end(page);
  } else if (urlObj.pathname === '/list') {
    res.setHeader('Content-Type', 'application/json');
    var list = [
      {title: 'mocha', desc: 'simple, flexible, fun javascript test framework for node.js & the browser.'},
      {title: 'expresso', desc: 'TDD framework by the author of JSpec'},
      {title: 'nodeunit', desc: 'Simple syntax, powerful tools. Based on the assert module. Available for node.js and the browser!'},
      {title: 'Vows', desc: 'asynchronous behaviour-driven development for node.js'},
      {title: 'others', desc: '...'}
    ];
    res.end(JSON.stringify(list));
  }
});

module.exports = app;
