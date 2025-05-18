
const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({

  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
  location: { type: String },
  status: { type: String, },

});

const Complaint = mongoose.model('Complaint', complaintSchema);
module.exports = Complaint;