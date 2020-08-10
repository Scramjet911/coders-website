const publicKey = process.env.publicKey;
const privateKey = process.env.privateKey;

const webpush = require('web-push');
const Subscribers = require('../models/subscribers');
const Users = require('../models/user');

webpush.setVapidDetails('mailto:massmenon@gmail.com',publicKey,privateKey);     // Webpush initialize with keys
var mydb = null;

/*  Function to save the user endpoint in User collection
    Request body should be of format : 
    {userId : ...,
    subscription : {
        endpoint : ...,
        keys : {...}
    }}
 */
exports.addSubscription = (req, res)=>{
    
    // Finds the user using ID and pushes subscription value into subscription Array
    let subval = req.body.subscription;
    subval.status = 1;
    Users.findOneAndUpdate({_id : req.body.userId}, {$push:{subscriptions : subval}}, (error,success)=>{     
        if(error){
            console.log("Couldn't add Subscriber to User Database",error);
        }
        else{
            console.log('Succesfully Subscribed',success);
            res.json({
                'message' : 'Successfully Subscribed' 
            })
        }
    });
};

/* Update Subscription Request, update subscription to enable(1) or disable(0) 
    Request body of format :
    {
        userId : ..,
        subId : ..,
        status : ... (1:enable, 0:disable)
    }
*/
exports.updateSubscription = (req, res)=>{
    let subval = req.body;
    Users.findOneAndUpdate({_id : subval.userId, "subscriptions._id":subval.subId}, {$set:{"subscriptions.$.status" : subval.status}}, (error,success)=>{     
        if(error){
            console.log("Couldn't update Subscriber status",error);
        }
        else{
            console.log('Succesfully Updated',success);
            res.json({
                'message' : 'Successfully Updated' 
            })
        }
    });
}

/* Update Subscription Request, update subscription to enable(1) or disable(0) 
    Request body of format :
    {
        userId : ..,
        subId : ..,
    }
*/
exports.deleteSubscription = (req, res)=>{
    let subval = req.body;
    Users.findOneAndUpdate({_id : subval.userId,"subscriptions._id":subval.endId}, {$pull:{"subscriptions" :{"_id": subval.endId}}}, (error,success)=>{     
        if(error){
            console.log("Couldn't Delete Subscriber from Database",error);
        }
        else{
            console.log('Succesfully Deleted Subscription',success);
            res.json({
                'message' : 'Successfully Deleted' 
            })
        }
    });
}