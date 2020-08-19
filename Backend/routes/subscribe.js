const express = require('express');
const router = express.Router();

const {isSignedIn, isAuthenticated} = require('../controllers/auth');
const {addSubscription, updateSubscription, deleteSubscription, getSubscription} = require('../controllers/subscibe');
const { getUserById } = require('../controllers/user');

router.param("userId",getUserById);
router.post('/add-subscription/:userId',isSignedIn, isAuthenticated, addSubscription);
router.post('/update-subscription/:userId',isSignedIn, isAuthenticated, updateSubscription);
router.post('/delete-subscription/:userId',isSignedIn, isAuthenticated, deleteSubscription);
// router.get('/get-subscription/:userId',isSignedIn,isAuthenticated,getSubscription);

module.exports = router;