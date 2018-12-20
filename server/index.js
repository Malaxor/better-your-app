
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const keys = require('../config/keys');

require('../models/User');
require('../services/passport');
require('../routes/authRoutes')(app);

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

app.listen(PORT);