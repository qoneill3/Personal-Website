//server file
var express =require('express');
var bodyParser = require('body-parser');
var flash = require('flash');
var session =require('express-session');
const path = require('path');

var app = express();

app.use(express.static(__dirname+'/root/public'));

app.use(function(req, res, next) {
	res.locals.currentUser = req.user;
	next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({secret: "portfolio"}));

app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(flash());

app.get('/', function homepage (req, res) {
 	res.render(__dirname + '/root/views/index.ejs');
 });

app.listen(process.env.PORT || 3000, function () {
  console.log('listening at http://localhost:3000/');
});

