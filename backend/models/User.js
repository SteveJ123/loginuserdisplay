const { builtinModules } = require('module');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    emailId: String,
    password: String,
    username: String,
    
    
})

module.exports = mongoose.model("User", userSchema);