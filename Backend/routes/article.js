const express = require("express");
var router = express.Router();
const { check} = require('express-validator');


const {isSignedIn,isAuthenticated,isAdmin} = require("../controllers/auth");
const {getUserById} = require("../controllers/user");
const {createArticle,uploadImage,getArticleById,updateArticle,getAllArticle,savingArticle,like,unlike,createComment, deleteComment}= require("../controllers/article")

router.param("userId",getUserById);
router.param("articleId",getArticleById);

router.post("/article/create/:userId",[
    check("title","titile must be filled").isLength({min:1}),
    check("body","body must be filled").isLength({min:1}),
    check("category","choose any one category").notEmpty()
],isSignedIn,isAuthenticated,createArticle);

router.put("/article/update/:userId/:articleId",isSignedIn,isAuthenticated,updateArticle)
router.post("/:userId/uploadimage",isSignedIn,isAuthenticated,uploadImage);

router.get("/article",getAllArticle);
router.post('/article/saving/:userId/:articleId',isSignedIn,isAuthenticated,savingArticle);
router.post('/article/liking/:userId/:articleId',isSignedIn,like);
router.post('/article/unliking/:userId/:articleId',isSignedIn,unlike);
router.post('/article/addcomment/:userId/:articleId',isSignedIn,isAuthenticated,createComment);
//something is wrong in delete route design
router.delete('/article/deletecomment/:userId/:articleId/:id',isSignedIn,isAuthenticated,deleteComment);





module.exports = router;
