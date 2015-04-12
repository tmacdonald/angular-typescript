var express = require('express');
var compress = require('compression');

var app = express();

app.use(compress());
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(3000);