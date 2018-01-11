var express = require('express');
var _ = require("underscore");
var moment = require("moment");

module.exports = {


    loggedRole: function(roles) {
        var alwaysLoggedIn = true;

        return function(req, res, next) {
            if (!alwaysLoggedIn) {

                res.locals.user = req.user;
                if (req.user && req.isAuthenticated() && _.contains(roles, req.user.role))
                    return next();
                res.redirect('/login');
            } else {
                res.locals.user = { google: { name: "DEBUG", email: "email" }, role: "admin" };
                return next();
            }
        }
    },

    handleError: function(err) {
        console.log("ERROR:" + err);
        return null;
    }

};