const mongoose =require('mongoose');
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
    author:{
            type:ObjectId,
            ref:"User",
            required:true
    }
},
{timestamps:true});

module.exports = mongoose.model("Article",articleSchema);