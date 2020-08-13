const Article =require("../models/article");
const User=require('../models/user');

const formidable = require("formidable");
const _ =require("lodash");
const fs =require('fs');
const path =require("path");
const {validationResult} = require('express-validator');
const article = require("../models/article");


exports.getArticleById = (req,res,next,id) =>{
    Article.findById(id)
    .populate("category")
    .exec((err,article)=>{
        if(err){ 
            return res.status(400).json({
                error:"Article not found"
            });
        }
        req.article = article;
        next();
    })
};

exports.createArticle = (req,res) =>{   

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({
            error:errors.array()[0].msg
        })
    }
    const article=new Article(req.body);
    article.authorname=req.profile.username;
    article.save((err,article)=>{
        if(err){
            res.status(400).json({
                err:err,
                error:"saving new article is failed"
            })
        }
        let user =req.profile;
        user.posts.push(article._id);
        user.save((err)=>{
                    if(err){
                        res.status(400).json({
                            error:"updation of user is failed"
                        })
                    }
                   
                })

        res.json(article);
    })

};
exports.updateArticle =(req,res)=>{
    if(req.params.userId!=req.article.author){
        return res.status(400).json({
            error:"you are not the author of this article"
        });
    }
    Article.findByIdAndUpdate(
        {_id:req.article._id},
        {$set:req.body},
        {new:true,useFindAndModify:false},
        (err,article)=>{
            if(err){
                return res.status(400).json({
                    error:"you are not authorized to update this article"
                });

            }
            res.json(article);
        }
    )

}

exports.uploadImage = (req,res)=>{
    let form = new formidable.IncomingForm();
    form.uploadDir='./public/uploads';
    form.maxFieldsSize=10*1024*1024;    //10MB
    form.keepExtensions = true;

    form.parse(req,(err,fields,file)=>{
        if(err){
            return res.status(400).json({
                error:"problem with image"
            })
        }
        var d=new Date().getTime()
        
        var newname =path.join(__dirname,'../',form.uploadDir,req.params.userId+'_'+d+'_'+file.photo.name);
        //var n_name=req.params.userId+'_'+d+'_'+file.photo.name
        var oldpath=""
       oldpath+= file.photo.path
        fs.rename(oldpath,newname,(err)=> {
            if (err){
                return res.status(400).json({

                    err:err,
                    error:"..problem with rename..."
                })
            }
            
            res.json({
                path:newname
            })
        });

    });


};

exports.getAllArticle =(req,res) =>{
    let limit=req.query.limit?parseInt(req.query.limit) :8
    let sortBy=req.query.sortBy?req.query.sortBy :"createdAt"
    Article.find()
   // .populate("author",'username')
    .sort([[sortBy,"asc"]])
    .limit(limit)
    .exec((err,articles)=>{
        if(err){
            return res.status(400).json({
                error:"no article found"
            });

        }
        res.json(articles)
    })
}
exports.savingArticle = (req,res)=>{
    let user = req.profile;
    user.savedarticles.push(req.article._id);
    user.save((err)=>{
        if(err){
            return res.status(400).json({
                error:"can not save this articel.."
            })
        }
        res.json({
            msg:"saved"
        })
    })
}
exports.like = (req,res)=>{
    let user = req.profile;
    user.likedarticles.push(req.article._id);
    user.save();
    article= req.article;
    article.like.push(user._id);
    article.save((err)=>{
        if(err){
            return res.status(400).json({
                error:"can not like this article"
            })
        }
        res.json({
            msg:"liked.."
        })
    })
}