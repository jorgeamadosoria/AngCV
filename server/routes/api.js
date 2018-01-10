var express = require('express');
var _ = require("underscore");
var moment = require('moment');
var mockCV = require('./mock-cv');


var router = express.Router();
/* GET api listing. */
router.get('/', (req, res) => {
    res.send(JSON.stringify(mockCV));
});

module.exports = router;