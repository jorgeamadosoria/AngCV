var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var moment = require('moment');
var utils = require('./data/utils');
var passport = require('passport');
var flash = require('connect-flash');
var _ = require('underscore');
var session = require('express-session');


var app = express();

// view engine setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'docs')));

//for passport, following tutorial: https://scotch.io/tutorials/easy-node-authentication-setup-and-local
app.use(session({
    secret: 'shoppingSecret'
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());
require('./config/passport')(passport);

var indexRouter = require('./routes/index');

indexRouter.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// the callback after google has authenticated the user
indexRouter.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/login'
    }));


app.use('/', indexRouter);
app.use('/brands', require('./routes/brands'));
app.use('/addresses', require('./routes/addresses'));
app.use('/items', require('./routes/items'));
app.use('/queries', require('./routes/queries'));
app.use('/lists', require('./routes/lists'));
app.use('/users', require('./routes/users'));
app.use('/reports', require('./routes/reports'));
app.use('/backup', require('./routes/backup'));



// =====================================
// GOOGLE ROUTES =======================
// =====================================
// send to google to do the authentication
// profile gets us their basic information including their name
// email gets their emails

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

/**
 * @fileOverview App configuration including router config, OAuth config, custom modules and Handlebars helpers
 * @requires config/passport
 * @requires hbs
 * @requires express-session
 * @requires underscore
 * @requires connect-flash
 * @requires passport
 * @requires data/utils
 * @requires moment
 * @requires body-parser
 * @requires cookie-parser
 * @requires express
 * @requires path
 * @requires morgan
 * 
 * @exports module
 */
module.exports = app;