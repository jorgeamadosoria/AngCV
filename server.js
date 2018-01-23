// Get dependencies
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const moment = require('moment');
const passport = require('passport');
const flash = require('connect-flash');
const _ = require('underscore');
const session = require('express-session');
const http = require('http');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.engine('html', require('ejs').renderFile);
app.use(cookieParser());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));


//for passport, following tutorial: https://scotch.io/tutorials/easy-node-authentication-setup-and-local
app.use(session({
    secret: 'jsonCVSecret'
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());
require('./server/config/passport')(passport);



api.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// the callback after google has authenticated the user
api.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/login'
    }));

app.use(express.static(path.join(__dirname, 'server/views')))
    // Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));