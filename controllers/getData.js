const Country = require('../models/Country');
const State = require('../models/State');
const Hobby = require('../models/Hobby');

exports.getCountry = async (req, res) => {
  try {
    const country = await Country.find({});
    res.status(201).json({
      success: true,
      data: country,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      msg: err.message,
    });
  }
};

exports.getHobbies = async (req, res) => {
  try {
    const hobbies = await Hobby.find({});
    res.status(201).json({
      success: true,
      data: hobbies,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      msg: err.message,
    });
  }
};

exports.getState = async (req, res) => {
  try {
    var state = await State.find({ country: req.params.id }).populate(
      'country'
    );

    res.status(201).json({
      success: true,
      data: state,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      msg: err.message,
    });
  }
};
