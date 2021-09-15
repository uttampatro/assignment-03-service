"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 255,
        min: 3,
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6,
    },
    password: {
        type: String,
        required: true,
        max: 255,
        min: 8,
    },
    role: {}
});
module.exports = mongoose.model('user', userSchema);
