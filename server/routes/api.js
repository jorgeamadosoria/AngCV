var express = require('express');
var _ = require("underscore");
var mockCV = require('./mock-cv');
var service = require('../data/cv');
var utils = require('../data/utils');


var router = express.Router();
/* GET api listing. */
router.get('/', utils.loggedRole(["reviewer"]),(req, res) => {
    res.send(JSON.stringify(mockCV));
});

router.post('/', utils.loggedRole(["reviewer"]),(req, res) => {
    service.upsert(req.body, req.body.id);
});

module.exports = router;