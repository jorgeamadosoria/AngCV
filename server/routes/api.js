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
  /*  console.log(req.user.google.email);
    service.findById(req.user.google.email).then(obj => {
        if (obj == null){
            service.upsert(new cv(),null).then(
                obj2 => res.send(JSON.stringify(obj2)));
        }
        else {
            console.log(JSON.stringify(obj));
            res.send(JSON.stringify(obj));
        }
    });*/
       res.send(JSON.stringify(mockCV));
});


router.get('/api/export', (req, res) => {
    /*  
      service.findById(req.user.google.email).then(obj => {
          if (obj == null){
              service.upsert(new cv(),null).then(
                  obj2 => res.send(JSON.stringify(obj2)));
          }
          else {
              console.log(JSON.stringify(obj));
              res.send(JSON.stringify(obj));
          }
      });*/
         res.send(JSON.stringify(mockCV));
  });
  

router.post('/api', utils.loggedRole(), (req, res) => {
    service.upsert(req.body, req.body._id).then(obj => res.send(obj)).catch(obj => res.send(obj));

});

module.exports = router;