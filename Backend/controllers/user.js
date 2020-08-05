const User =require("../models/user");
const formidable = require("formidable");
const _ =require("lodash");
const fs =require("fs");


exports.getUserById =(req,res,next,id)=>{
    User.findById(id).exec((err,user)=> {
        if(err || !user){
            return res.status(400).json({
                errpr:"No user was found in DB"
            })
        } 
        req.profile =user;
        next();
    });
};

exports.getUser = (req,res)=>{
    
    req.profile.salt =undefined;
    req.profile.encry_password= undefined;
    req.profile.createdAt=undefined;
    req.profile.updatedAt=undefined;
    if(req.profile.photo.data){
        req.profile.photo=undefined;
    }
    
    console.log(req.prfile);
    return res.json(req.profile)

};
exports.photo = (req,res,next)=>{
    if(req.profile.photo.data){
        res.set("content-Type",req.profile.photo.contentType)
        return res.send(req.profile.photo.data);
    }
    next();
}

//update user
exports.updateUser = (req,res)=>{
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req,(err,fields,file)=>{
        if(err){
            return res.status(400).json({
                error:"problem with image"
            })
        }
        //updation code
        let user = req.profile;
        user = _.extend(user,fields)

        //handle file here

        if(file.photo){
            if(file.photo.size>3000000){
                return res.status(400).json({
                    error:"file size is too big!"
                })
            }
            user.photo.data=fs.readFileSync(file.photo.path);
            user.photo.contentType = file.photo.type
        }
        //saving updated user
        user.save((err,user)=>{
            if(err){
                res.status(400).json({
                    error:"updation of user is failed"
                })
            }
            res.json(user);
        })

    });
}