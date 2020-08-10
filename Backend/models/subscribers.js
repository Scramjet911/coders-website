const mongoose = require('mongoose');

var subscriberSchema = new mongoose.Schema({
    endpoint : {
        type : String,
        required : true
    },
    keys : mongoose.Schema.Types.Mixed,
    createDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Subscribers', subscriberSchema);