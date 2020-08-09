const express = require("express");
var router = express.Router();
const { check} = require('express-validator');


const {isSignedIn,isAuthenticated,isAdmin} = require("../controllers/auth");
const {getUserById} = require("../controllers/user");
const {createArticle,uploadImage,getArticleById}= require("../controllers/article")

router.param("userId",getUserById);
router.param("articleId",getArticleById);

router.post("/article/create/:userId",[
    check("title","titile must be filled").isLength({min:1}),
    check("body","body must be filled").isLength({min:1})
],isSignedIn,isAuthenticated,createArticle);
router.post("/:userId/uploadimage",isSignedIn,isAuthenticated,uploadImage);


module.exports = router;
