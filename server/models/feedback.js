
const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  text: { type: String, required: true },
  sentiment: { type: String, required: true },
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
    