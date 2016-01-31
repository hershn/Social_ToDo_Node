var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(process.env.PORT, function () {
//app.listen(process.env.C9_PORT || 3000, function () {
  console.log('index.app - app listening on port ' + process.env.PORT );
});
