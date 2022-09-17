const mongoose = require('mongoose');

const HobbySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a hobby'],
  },
});

module.exports = mongoose.model('Hobby', HobbySchema);
