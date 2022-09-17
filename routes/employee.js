const express = require('express');
const router = express.Router();

const {
  addEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} = require('../controllers/employee');

router.route('/create').post(addEmployee);
router.route('/get/:id').get(getEmployee);
router.route('/update/:id').patch(updateEmployee);
router.route('/delete/:id').delete(deleteEmployee);

module.exports = router;
