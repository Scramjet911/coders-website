const Article =require("../models/article");
const formidable = require("formidable");
const _ =require("lodash");
const fs =require('fs');
const path =require("path");
const { check ,validationResult, oneOf} = require('express-validator');


exports.getArticleById = (req,res,next,id) =>{
    Product.findById(id)
   // .populate("category")
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
    article.save((err,article)=>{
        if(err){
            res.status(400).json({
                err:err,
                error:"saving new article is failed"
            })
        }
        res.json(article);
    })

};

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
        var n_name=req.params.userId+'_'+d+'_'+file.photo.name
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