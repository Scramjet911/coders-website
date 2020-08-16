const Article =require("../models/article");
const Comment = require("../models/articlecomment")

const formidable = require("formidable");
const _ =require("lodash");
const fs =require('fs');
const path =require("path");
const {validationResult} = require('express-validator');


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
    user.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
    });
   let  article= req.article;
    article.like.push(user._id);
    article.like_count+=Number(1);

    article.save((err)=>{
        if(err){
            return res.status(400).json({
                error:"can not like this article"
            })
        }
         res.json({
            msg:"liked..",
            like:article.like_count

         })
    })
}
exports.unlike = (req,res)=>{
    let user = req.profile;
    user.likedarticles.pull(req.article._id);
    user.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
    });
   let  article= req.article;
    article.like.pull(user._id);
    article.like_count-=Number(1);
    article.save((err)=>{
        if(err){
            return res.status(400).json({
                error:"can not like this article"
            })
        }
         res.json({
            msg:"unliked..",
            like:article.like_count
         })
    })
}

exports.createComment = (req,res)=>{
    // const errors = validationResult(req)
    // if(!errors.isEmpty()){
    //     return res.status(422).json({
    //         error:errors.array()[0].msg
    //     })
    // }
    
    let article= req.article;
    let user = req.profile;
    const comment =new Comment(req.body);
    comment.article=article._id;
    comment.author =user._id;
    comment.save((err,comment)=>{
        if(err){
            return res.json({
                error:"comment not saved.."
            })
        }
        user.comment_hist.push(comment._id);
        article.comments.push(comment._id);
        user.save((err)=>{
            if(err){
                return res.json({
                    error:"comment not saved in user"
                })
            }
            article.save((err)=>{
                if(err){
                    return res.json({
                        error:"comment not saved in article..."
                    })
                }
            })

        })
        res.status(400).json({
            msg:"comment saved successfully.."
        })
    })


}
exports.deleteComment= (req,res)=>{
    id=req.params.id;
    let user =req.profile;
    let article = req.article;
    Comment.findById(id,(err,comment)=>{
       // console.log(comment)
        if(err){
            return res.json({
                error:"can not find this comment"
            })
        }
        comment.remove((err,comment)=>{
            if(err){
                return res.json({
                    error:"can not delete this comment"
                })
            }
            user.comment_hist.pull(comment._id);
            article.comments.pull(comment._id);
            user.save();
            article.save()
            res.status(400).json({
                msg:"comment deleted successfully"
            })
    })
    })
    
}