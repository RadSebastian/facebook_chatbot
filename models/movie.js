var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
  user_id: {type: String},
  titolo: {type: String},
  trama: {type: String},
  data: {type: String},
  durata: {type: String},
  direttore: {type: String},
  cast: {type: String},
  valutazione: {type: String},
  poster_url: {type: String}
});

module.exports = mongoose.model("Movie", MovieSchema);