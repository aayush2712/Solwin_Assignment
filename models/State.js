const mongoose = require('mongoose');

const StateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a state'],
  },
  country: {
    type: mongoose.Schema.ObjectId,
    ref: 'Country',
    required: true,
  },
});

module.exports = mongoose.model('State', StateSchema);
