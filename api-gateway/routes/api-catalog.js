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

// POST request for registering a user
router.post('/auth/register', auth_controller.user_register);

// GET request for verifying user tokens
router.get('/auth/token', auth_controller.user_token);

module.exports = router;