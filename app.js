var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');


var path = require('path');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Define bodyparser (handles POST requests)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// initialiseer sessies
app.use(session({
 secret: "YourSuperSecretStringWithStrangeCharacters#@$!" ,
 resave: false,
 saveUninitialized: true
}));

app.get("/", function(req, res){
  res.render("index");
});


// Start the server
app.listen(3000, function(){
  console.log('App listening at http://192.168.56.101:3000/users');
});
