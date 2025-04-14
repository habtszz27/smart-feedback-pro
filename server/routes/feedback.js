
const express = require('express');
const Feedback = require('../models/feedback');

const router = express.Router();

router.post('/', async (req, res) => {
  const { text } = req.body;
  // Sentiment analysis logic goes here, for now we just simulate it.
  const sentiment = text.includes('good') ? 'positive' : 'negative';

  const feedback = new Feedback({ text, sentiment });
  await feedback.save();

  res.json({ message: 'Feedback submitted successfully!' });
});

router.get('/', async (req, res) => {
  const feedbacks = await Feedback.find();
  res.json(feedbacks);
});

module.exports = router;
    