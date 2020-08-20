const mongoose = require('mongoose');

var notifQueueSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        required : [true, "User Id cannot be blank"],
        index : true
    },
    eventId : {
        type : mongoose.Schema.Types.ObjectId,
        required : [true, "Event Id cannot be blank"]
    },
    date : {
        type : Date,
        required : [true, "Date cannot be blank"],
        index : true
    },
    notifyBefore : {
        type : Number,
        required : true,
        default : 30
    }
},{
    toJSON : {
        transform : (doc,ret)=>{
            delete ret._id;
            delete ret.__v;
        }
    }
});

module.exports = new mongoose.model("NotifQueue",notifQueueSchema);
