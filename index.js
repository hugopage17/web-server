var express = require('express');
var app = express();
var path = require('path');
var public = path.join(__dirname, 'public');

app.get('/', function(req, res) {
    res.sendFile(public)
})

app.get('/:refcode/:id', function(req, res, err) {
  console.log(public)
  res.sendFile(public)
})

app.use('/', express.static(public));

app.listen(60);
