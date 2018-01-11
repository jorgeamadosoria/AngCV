var express = require('express');
var _ = require("underscore");
var mockCV = require('./mock-cv');
var service = require('../services/cv');
var utils = require('../data/utils');


var router = express.Router();
/* GET api listing. */
router.get('/', utils.loggedRole(["reviewer"]), (req, res) => {
    /*service.findById("5a53753ef9334923a4730693").then(obj => {
        console.log(obj);
        res.send(JSON.stringify(obj));
    });*/
    //console.log("get");
    res.send(JSON.stringify(mockCV));
});

router.post('/', utils.loggedRole(["reviewer"]), (req, res) => {
    service.upsert(req.body, req.body.id).then(obj => res.send(obj)).catch(obj => res.send(obj));

});

module.exports = router;