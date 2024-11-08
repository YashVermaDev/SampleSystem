const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {type: String, required: true},
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,  // Ensure email is unique for each user
        lowercase: true,
        trim: true,
        match: [/\S+@\S+\.\S+/, "Email format is invalid"]  // Basic email format validation
    },
    age : {type: Number},
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 6  // Define a minimum password length for better security
    }
});

module.exports = mongoose.model('User', userSchema);