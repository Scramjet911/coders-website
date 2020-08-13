const mongoose =require('mongoose');
const { string } = require('yargs');
const {ObjectId}=mongoose.Schema;
const articleSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    authername:{
        type:String
    },
    author:{
            type:ObjectId,
            ref:"User",
            required:true
    },
    category:[{
        type:ObjectId,
        ref:"Category",
        required:true
    }],
    like:[{
        type:ObjectId,
        ref:'Users'
    }]

},
{timestamps:true});

module.exports = mongoose.model("Article",articleSchema);