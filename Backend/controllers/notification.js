require('dotenv').config();

const Agenda = require('agenda');
const User = require('../models/user');
const Events = require('../models/events');
const webpush = require('web-push');

/* Find user, for each active sub, send notification webpush with 
    message = {title : ...,
        body : ...}, 
after getting event title */
agenda.define('sendNotification',(job)=>{
    let notifItem = job.attrs.data;
    let message = {"title" : "Event upcoming"};
    User.findById(notifItem.userId,(error, user)=>{
        if(error){
            console.log("Couldn't Find User ",error);
        }
        Events.findById(notifItem.eventId, (err, event)=>{
            if(err){
                console.log("Couldn't Find Event ",err);
            }
            else{
                message.body = event.title;
                user.subscriptions.forEach(sub => {
                    if(sub.active==1){
                        webpush.sendNotification(sub,JSON.stringify(message))
                        .catch(error => console.log("Notification Send Error",error));
                    }
                });
            }
        });
        
    });     
});

exports.notifInit = async ()=>{
    const agenda = new Agenda({db: {address : process.env.DATABASE, collection:'dailyQueue', 
    processEvery : '5 minutes', options : {useNewUrlParser: true, useUnifiedTopology: true}}});

    await agenda.start();
}

exports.addNotif = async (notifItem)=>{
    let notifTime = new Date(notifItem.date);
    notifTime.setMinutes(notifTime.getMinutes() - notifItem.notifyBefore);
    await agenda.schedule(notifTime,'sendNotification',{data : notifItem});
}