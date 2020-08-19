const {Events, EventsReview} = require('../models/events');

exports.addReviewEvent = (req, res)=>{
    var saveObj = req.body;
    saveObj.date = new Date(saveObj.date);
    EventsReview.create(saveObj,(error,newEvent)=>{
        if(error && error.name == 'ValidationError'){
            console.log('Validation Error : ',error);
            res.status(400).json(error);
        }
        else if(error){
            console.log(error);
            res.status(500).json(error);
        }
        else{
            console.log('New Event Created for Review',newEvent);
            res.status(201).send("Success");
        }
    });
}

exports.approveEvent = (req, res)=>{
    EventsReview.findByIdAndRemove(req.body.id,(error, event)=>{
        if(error){
            console.log("Review Event not found",error);
            res.status(404).send("Event Not Found");
        }
        else{
            console.log(event.toJSON());
            delete event._id;
            Events.create(event.toJSON(), (err, obj)=>{
                if(err){
                    console.log("Couldn't add Event to Approved Events",err,event);
                    res.status(500).send("Server Error");
                }
                else{
                    res.status(201).send("Succes");
                }
            });
        }
    });
}

/* Add Events for admins and by scraping
    request body : {
        title : ..,
        description : .. (opt),
        location : ..,
        date : ..,  ("yyyy-mm-dd")
        duration : ...(in minutes)    
    }
*/
exports.addEvent = (req, res)=>{
    var saveObj = req.body;
    saveObj.date = new Date(saveObj.date);
    Events.create(saveObj, (err,obj)=>{
        if(err){
            console.log("Couldn't Add To Approved Event",err);
            res.status(400).send("Bad Request");
        }
        else{
            console.log("Added to Approved Events",obj);
            res.status(201).send("Success");
        }
    });
}

exports.deleteEvent = (req,res)=>{
    if(req.body.hasOwnProperty("id") && req.body.id==null){
        res.status(400).send("Bad Request");
        return;
    }
    Events.deleteOne({_id : req.body.id},(error)=>{
        if(error){
            console.log("Couldn't Delete Event",error);
            res.status(500).send("Server Error");
        }
        else{
            res.status(200).send("Success");
        }
    });
}