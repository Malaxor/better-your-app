const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const keys = require('../config/keys');
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

require('../services/passport');
require('../routes/authRoutes')(app);



app.listen(PORT);