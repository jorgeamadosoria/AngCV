var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var mongodb_connection_string = 'mongodb://127.0.0.1:27017/angcv';
if(process.env.MONGODB_DB_URL){
  mongodb_connection_string = process.env.MONGODB_DB_URL;
}

var promise = mongoose.connect(mongodb_connection_string, {
    useMongoClient: true,
  });

promise.then(function (db) {
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
});

module.exports = mongoose;
