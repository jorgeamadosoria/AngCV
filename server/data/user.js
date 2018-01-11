mongoose = require('./connect');

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({

    google: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    photo: {
        type: String,
    },
    role: {
        type: String,
        default:"reviewer"
    }

});
 
// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// This function checks if the google oauth password is valid.
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);