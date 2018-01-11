mongoose = require('./connect');

var mongoose = require('mongoose');

var cvSchema = mongoose.Schema({
  "personal": {
    "name": String,
    "label": String,
    "picture": String,
    "email": String,
    "phone": String,
    "summary": String,
    "location": {},
    "social": []
  },
  "skills": [],
  "references": [],
  "work": [],
  "education": [],
  "volunteer": [],
  "accolades": [],
  "publications": [],
  "events": [],
  "languages": []
});

module.exports = mongoose.model('CV', cvSchema);
