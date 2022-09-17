const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a country'],
  },
});

module.exports = mongoose.model('Country', CountrySchema);
