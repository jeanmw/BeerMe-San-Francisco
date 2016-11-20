var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var searchable = require('mongoose-searchable');


var BeerSchema = new Schema({
  nameDisplay: String,
  description: String,
  logo: String,
  // brewery: String,
  abv: String
});

BeerSchema.plugin(searchable);

var Beer = mongoose.model('Beer', BeerSchema);

module.exports = Beer;
