const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  name: String,
  co2: Number
});

module.exports = mongoose.model('Activity', activitySchema);