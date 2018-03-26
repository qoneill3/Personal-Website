//server file
var express =require('express');
var bodyParser = require('body-parser');
var flash = require('flash');
var session =require('express-session');
const path = require('path');

var app = express();

app.use(express.static(__dirname+'./root/css'));

app.use(function(req, res, next) {
	res.locals.currentUser = req.user;
	next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('index', path.join(__dirname, 'index'));

app.set('view engine', 'html');
app.use(flash());

app.use(express.static(__dirname + 'root/css'));

app.get('/', function homepage (req, res) {
 	res.render(__dirname + 'root/index.html');
 });

app.listen(process.env.PORT || 3000, function () {
  console.log('listening at http://localhost:3000/');
});

