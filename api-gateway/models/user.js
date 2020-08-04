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

const User = module.exports = mongoose.model('User', userSchema);

//user.save is used to add a new user in our database
module.exports.add = (user, callback) => {
    user.save(callback);
};

//getById
module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
};