const express = require("express");
var router = express.Router();

const {getUserById,getUser, updateUser,photo, follow, unfollow} = require("../controllers/user");
const {isSignedIn,isAuthenticated,isAdmin} = require("../controllers/auth");

router.param("userId",getUserById)
//user read routes
router.get("/user/:userId",isSignedIn,isAuthenticated,getUser);
router.get("/user/photo/:userId",photo);


//update route
router.put("/user/:userId",isSignedIn,isAuthenticated,updateUser)
router.post("/user/:userId/follow/:id",isSignedIn,isAuthenticated,follow)
router.post("/user/:userId/unfollow/:id",isSignedIn,isAuthenticated,unfollow)




module.exports= router;