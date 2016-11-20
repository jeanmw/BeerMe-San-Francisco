var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/beer-mesf");

module.exports.Beer = require('./beer');
