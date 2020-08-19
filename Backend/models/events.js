const mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true,'Title cannot be blank']
    },
    description : {
        type : String
    },
    location : {
        type : String,
        required : [true, 'Location cannot be blank']
    },
    date : {
        type : Date,
        required : [true, 'Date cannot be blank']
    },
    duration : {
        type : Number,
        default : 0,            // Duration in Minutes
        required : [true, 'Duration cannot be blank']
    }
},{
    toJSON : {
        transform : (doc,ret)=>{
            delete ret._id;
            delete ret.__v;
        }
    }
}
);

var events = mongoose.model("Events",eventSchema);
var eventsReview = mongoose.model("EventsReview",eventSchema);

module.exports = {
    Events : events,
    EventsReview : eventsReview
}