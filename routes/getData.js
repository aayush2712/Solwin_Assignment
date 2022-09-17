const express = require('express');
const router = express.Router();

const { getCountry, getState, getHobbies } = require('../controllers/getData');

router.route('/countries').get(getCountry);
router.route('/hobbies').get(getHobbies);
router.route('/states/:id').get(getState);
router.route('/states').get(getState);

module.exports = router;
