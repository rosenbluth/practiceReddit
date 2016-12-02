'use strict';

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const knex = require('../db/knex');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const path = require('path');

app.disable('x-powered-by');

const bodyParser = require('body-parser');
const session = require('express-session');


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(session({
    name: 'reddit_redux',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {}
}))
app.use(passport.initialize());
app.use(passport.session());

// const Account = require('./models/account');
// passport.use(new LocalStrategy(Account.authenticate()));
// passport.serializeUser(Account.serializeUser());
// passport.deserializeUser(Account.deserializeUser());

const users = require('./routes/users.js');
const posts = require('./routes/posts.js');

app.use('/api', users);
app.use('/api', posts);


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
} )


const port = process.env.PORT || 3000;
// Server Listener
app.listen(port, function() {
    console.log('listening on port: ' + port);
});

module.exports = app;




// SET SESSION SECRET
// bash -c 'echo "SESSION_SECRET="$(openssl rand -hex 64)' >> .env
