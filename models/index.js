var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/beer-mesf");

module.exports.Beer = require('./beer');
