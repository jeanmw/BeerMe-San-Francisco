// SERVER-SIDE JAVASCRIPT

//require express
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var db = require('./models');

var controllers = require('./controllers');


// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api', controllers.api.index);
app.get('/api/beer', controllers.beer.index);
app.get('/api/beer/:_id', controllers.beer.show);
app.post('/api/beer', controllers.beer.create);
app.post('/api/beer/update/:_id', controllers.beer.update);
app.delete('/api/beer/:_id', controllers.beer.destroy);
app.get('/search', controllers.beer.searching);





app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
