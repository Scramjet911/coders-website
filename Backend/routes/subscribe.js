const express = require('express');
const router = express.Router();

const {isSignedIn, isAuthenticated} = require('../controllers/auth');
const {addSubscription,updateSubscription,deleteSubscription} = require('../controllers/subscibe');

router.post('/add-subscription',isSignedIn, isAuthenticated, addSubscription);
router.post('/update-subscription',isSignedIn, isAuthenticated, updateSubscription);
router.post('/delete-subscription',isSignedIn, isAuthenticated, deleteSubscription);
