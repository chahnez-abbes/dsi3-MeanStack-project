
const mongoose = require('mongoose');

const maisonSchema = new mongoose.Schema({
    name: {type: String, required: true},
  description: {type: String, required: true},
  image: {type: String, required: true},
  nbchambre: {type: String, required: true},
  prix: {type: String, required: true},
  lieu: {type: String, required: true},
  tel: {type: Number, required: true},
  mail: {type: String, required: true},
  detail: {type: String, required: true}
});

module.exports = mongoose.model('maison', maisonSchema);
