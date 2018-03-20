var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();


app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));


app.set('view engine', 'ejs');

var server = app.listen(8000, function(){
    console.log('listening 8000');
});
//load route files, pass app and server into it(for making url visits and events)

var route = require('./routes/index.js')(app,server);
