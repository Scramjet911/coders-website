var mongoose = require('mongoose');
const crypto = require('crypto');  
const uuidv1= require('uuid/v1');

var userSchema = new mongoose.Schema({
    username :{
        type:String,
        required:true,
        maxlength:15,
        trim:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        maxlength:50,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    encry_password:{
        type:String,
        required:true
    },
    salt:String,
    role:{
        type:Number,
        default:0,
    },
    occupation:{
        type:String,
        required:true
    },
    institution:{
        type:String,
        required:true
    },
    parti_List:{
        type:Array,
        default:[]
    },
    savedList:{
        type:Array,
        default:[]
    },
    prog_lang:{
        type:[String],
        default:[]
    },
    DOB:{
      type:Date  
    },
    articles:{
        type:Array,
        default:[]
    },
    savedarticles:{
        type:Array,
        default:[]
    },
    photo:{
        data:Buffer,
        contentType:String
    },
    comment_hist:{
        type:Array,
        default:[]
    },
    discussion:{
        type:Array,
        default:[]
    }
    

    //todo rating
    
},
{timestamps:true});




userSchema
.virtual("password")
.set(function(password){
    this._password=password
    this.salt=uuidv1();
    this.encry_password=this.securePassword(password)
})
.get(function(){
    return this._password
})

userSchema.methods={
  authenticate:function(plainpassword){
        return this.securePassword(plainpassword)===this.encry_password
  },  
  securePassword : function(plainpassword){
      if(!plainpassword) return "";
      try{
        return  crypto.createHmac('sha256', this.salt)
        .update(plainpassword)
        .digest('hex');
      }catch(err){
            return "";
      }
  }
}

module.exports=mongoose.model("User",userSchema)