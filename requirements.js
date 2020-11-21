const express = require('express');
const mongoose  = require('mongoose');
const userSchema = new mongoose.Schema({
email:{
 type: String,
 required: true

},
name:{
    type: String,
    required: true
   
   },
username:{
    type: String,
    required: true
   
   },

registerDate:{
    type: Date,
    required: true,
    default: Date.now
   
   }


})

module.exports = mongoose.model('user', userSchema)