var express = require('express');
var compress = require('compression');

var app = express();

app.use(compress());
app.use(express.static('dist'));

module.exports = app.listen(3000);
