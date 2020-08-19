const express = require('express');
const router = express.Router();
const {check} = require('express-validator');

const {addEvent, approveEvent, addReviewEvent, deleteEvent} = require('../controllers/events');
const { isAdmin, isSignedIn, isAuthenticated } = require('../controllers/auth');
const { getUserById } = require('../controllers/user');

const eventValidate = ()=>{
    return [
        check("userId","User Id is required").exists(),
        check("title","Title is required").exists(),
        check("location","Location is required").exists(),
        check("date","Date is required").exists(),
        check("duration","Duration is required").exists()
    ]
}

router.param("userId",getUserById);
// Add Events for non admin users
router.post('/add-review-event/:userId', eventValidate(), isSignedIn, isAuthenticated, addReviewEvent);
// Approve Events added by non admin users
router.post('/auth-event/:userId',isSignedIn, isAuthenticated, isAdmin, approveEvent);
// Add Events for admin users
router.post('/add-event/:userId', eventValidate(), isSignedIn,isAuthenticated, isAdmin, addEvent);
// Delete Events, only admins
router.post('/delete-event/:userId',isSignedIn, isAuthenticated, isAdmin, deleteEvent);

module.exports = router;