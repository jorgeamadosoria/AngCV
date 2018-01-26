var express = require('express');
var _ = require("underscore");
var mockCV = require('./mock-cv');
var service = require('../services/cv');
var utils = require('../data/utils');
var path = require('path');


var router = express.Router();

router.get('/', utils.loggedRole(), (req, res) => {
    console.log(req.query._id);
    service.findById(req.query._id).then(obj => {
        console.log(JSON.stringify(obj));
        res.send(JSON.stringify(obj));
    });
    //   res.send(JSON.stringify(mockCV));
});

router.post('/', utils.loggedRole(), (req, res) => {
    service.upsert(req.body, req.body._id).then(obj => res.send(obj)).catch(obj => res.send(obj));

});

module.exports = router;