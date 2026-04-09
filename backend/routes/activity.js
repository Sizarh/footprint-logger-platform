const express = require('express');
const router = express.Router();

// TEMP STORAGE (IN MEMORY)
let activities = [];

// ADD ACTIVITY
router.post('/', (req, res) => {
  const newActivity = req.body;
  activities.push(newActivity);
  res.json(newActivity);
});

// GET ALL ACTIVITIES
router.get('/', (req, res) => {
  res.json(activities);
});

module.exports = router;