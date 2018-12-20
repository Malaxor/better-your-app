
const express = require('express');
const app = express();
const cookieSession = require('cookie-session');
const passport = require('passport');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const keys = require('../config/keys');

require('../models/User');
require('../services/passport');
app.use(cookieSession({
    
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days (in milliseconds)
    keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());
require('../routes/authRoutes')(app);

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

app.listen(PORT);