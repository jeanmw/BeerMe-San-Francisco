var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var BeerSchema = new Schema({
  nameDisplay: String,
  description: String,
  logo: String,
  // brewery: String,
  abv: String
});

var Beer = mongoose.model('Beer', BeerSchema);

module.exports = Beer;
