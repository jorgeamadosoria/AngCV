var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var promise = mongoose.connect('mongodb://localhost:27017/angcv', {
    useMongoClient: true,
});

promise.then(function(db) {
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
});

module.exports = mongoose;