var express = require('express');
var _ = require("underscore");
var mockCV = require('./mock-cv');
var service = require('../services/cv');
var cv = require('../data/cv');
var utils = require('../data/utils');
var path = require('path');


var router = express.Router();

router.get('/auth/check', (req, res) => {
    res.send(req.user);
});

router.get('/api', utils.loggedRole(), (req, res) => {
    console.log(req.user.google.email);
    service.findByEmail(req.user.google.email).then(obj => {
        if (obj == null) {
            console.log('obj is null');
            service.upsert(new cv(), null).then(
                obj2 => res.send(JSON.stringify(obj2))).catch(err => console.log(err));
        } else {
            console.log('obj is not null');
            res.send(JSON.stringify(obj));
        }
    });
    // res.send(JSON.stringify(mockCV));
});

router.get('/api/export/:id', (req, res, next) => {
    service.findById(req.params.id).then(obj => {
        res.send(JSON.stringify(obj));
    });
});


router.post('/api', utils.loggedRole(), (req, res) => {
    console.log("Body " + JSON.stringify(req.body));
    service.upsert(req.body, req.body._id).then(obj => res.send(obj)).catch(obj => res.send(obj));

});

module.exports = router;