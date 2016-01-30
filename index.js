var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World! --- chaning what what 2 ');
});

app.listen(process.env.PORT, function () {
//app.listen(process.env.C9_PORT || 3000, function () {
  console.log('index.app - app listening on port ' + process.env.PORT );
});
