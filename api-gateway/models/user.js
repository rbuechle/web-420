/*============================================
; Title: Assignment 2.3
; Author: Peter Itskovich
; Date: 13 July 2020
; Modified By: Rebecca Buechle
; Description: API Gateway part 2
===========================================
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
username: {type: String, required: true},
password: {type: String, required: true},
email: {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);
