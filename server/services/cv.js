var model = require('../data/cv');
var mongoose = require('mongoose');
var cv = require('../data/cv');

module.exports = {

    upsert: function(obj, id) {
        if (id === undefined || id == null){
            return model.create(new cv(),res => console.log(res));
        }
        else {
            obj._id = mongoose.Types.ObjectId(id);
            return model.findByIdAndUpdate(obj._id, obj).exec();
        } 
    },

    delete: function(id) {
        return model.findByIdAndRemove(mongoose.Types.ObjectId(id)).exec();
    },

    findByEmail: function(email) {
        return model.findOne({ "personal.email": email });
    },

    findById: function(id) {
        return model.findById(id);
    }
};