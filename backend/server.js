require('dotenv').config(); // Load .env variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const activityRoutes = require('./routes/activity');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/activities', activityRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));