var model = require('../data/cv');

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

    findById: function(id) {
        return model.findById(mongoose.Types.ObjectId(id)).lean().exec();
    }
};