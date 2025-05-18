const express = require('express');
const myComplaintRouter = express.Router();

const {
  getComplaint,
  getSingleComplaint,
  updateComplaint,
  addComplaint
} = require('../controllers/complaint.controller');

const authmiddleware = require('../middleware/auth.middleware');

// Routes with authmiddleware to access req.user
myComplaintRouter.get('/', getComplaint);
myComplaintRouter.post('/add', addComplaint);
myComplaintRouter.patch('/:Id/status', updateComplaint);
myComplaintRouter.get('/:Id', getSingleComplaint);

module.exports = myComplaintRouter;
