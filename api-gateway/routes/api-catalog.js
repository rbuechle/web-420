/*============================================
; Title: Assignment 2.3
; Author: Peter Itskovich
; Date: 13 July 2020
; Modified By: Rebecca Buechle
; Description: API Gateway part 2
===========================================
*/

/**
 * * API Routes
 */

var express = require('express');
var router = express.Router();
var auth_controller = require('../controllers/authController');
var checkToken = require('../check-token'); 

module.exports = router;

// POST request for registering a user
router.post('/auth/register', auth_controller.user_register);

router.post('/auth/login', auth_controller.user_login);


// GET request for verifying user tokens
router.get('/auth/token', checkToken, auth_controller.user_token); 

//allows user logout requests
router.get('/auth/logout', auth_controller.user_logout);