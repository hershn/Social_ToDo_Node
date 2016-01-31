var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();
var bodyParser = require('body-parser');

//Configure our app
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render('index');
});

app.post('/user/register', function (req, res) {
    res.send(req.body);
    console.log('the user has the email address ', req.body.email);
    console.log('user name is ', req.body.fl_name);
    console.log('the user password ' , req.body.password);
});

app.listen(process.env.PORT, function () {
//app.listen(process.env.C9_PORT || 3000, function () {
  console.log('index.app - app listening on port ' + process.env.PORT );
});
