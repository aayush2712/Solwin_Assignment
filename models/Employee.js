const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
    unique: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
  },
  marital_status: {
    type: String,
    enum: ['Married', 'Unmarried'],
  },
  marriage_date: {
    type: Date,
    required: [
      function () {
        return this.marital_status != 'Unmarried';
      },
      'Marriage date is required if Marital status is married',
    ],
  },
  salary: {
    type: Number,
    required: true,
  },
  country_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'Country',
    required: true,
  },
  state_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'State',
    required: true,
  },
  hobbies: {
    type: String,
    enum: ['Dancing', 'Singing', 'Guitar', 'Golf', 'Fishing'],
  },
  status: {
    type: String,
    required: true,
    enum: ['Active', 'Inactive'],
  },
});

module.exports = mongoose.model('Employee', EmployeeSchema);
