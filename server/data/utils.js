var express = require('express');
var _ = require("underscore");
var moment = require("moment");
var path = require("path");

module.exports = {

    loggedRole: function() {
        var alwaysLoggedIn = false;

        return function(req, res, next) {
            if (!alwaysLoggedIn) {

                res.locals.user = req.user;
                if (req.user && req.isAuthenticated())
                    return next();
                res.sendStatus(401);
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