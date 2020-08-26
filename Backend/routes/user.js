const express = require("express");
var router = express.Router();

const {getUserById, getUser, updateUser,photo, follow, unfollow, saveEvent, getSavedEvents, deleteSavedEvent} = require("../controllers/user");
const {isSignedIn, isAuthenticated} = require("../controllers/auth");
const {queueNotification, getNotification, deleteNotification, updateNotification} = require("../controllers/notification");

router.param("userId",getUserById);
//user read routes
router.get("/user/:userId",isSignedIn,isAuthenticated,getUser);
router.get("/user/photo/:userId",photo);


//update route
router.put("/user/:userId",isSignedIn,isAuthenticated,updateUser);
// Follow, Unfollow other Users
router.post("/user/:userId/follow/:id",isSignedIn,isAuthenticated,follow);
router.post("/user/:userId/unfollow/:id",isSignedIn,isAuthenticated,unfollow);

// Save Events Routes
router.get("/user/event/:userId", isSignedIn, isAuthenticated, getSavedEvents);
router.post("/user/event/:userId", isSignedIn, isAuthenticated, queueNotification, saveEvent);
router.delete("/user/event/:userId", isSignedIn, isAuthenticated, deleteNotification, deleteSavedEvent)

//Event Notifications
router.get("/user/event/:userId/:eventId", isSignedIn, isAuthenticated, getNotification);
router.put("/notification/:userId", isSignedIn, isAuthenticated, updateNotification);

module.exports = router;