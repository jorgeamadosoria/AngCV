var model = require('../data/cv');
var mongoose = require('mongoose');

module.exports = {

    upsert: function(obj, id) {
        if (id === undefined)
            return model.create(obj);
        else {
            obj._id = mongoose.Types.ObjectId(id);
            return model.findByIdAndUpdate(obj._id, obj).exec();
        }
    },

    delete: function(id) {
        return model.findByIdAndRemove(mongoose.Types.ObjectId(id)).exec();
    },

    findByEmail: function(email) {
        return model.findOne({ "email": email });
    },

    findById: function(id) {
        return model.findById(id);
    }
};