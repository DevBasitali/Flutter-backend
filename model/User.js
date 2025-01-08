const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // trim: true,
        // lowercase: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    address: {
        type: String,
        required: false,
        trim: true
    },
    skills: {
        type: [String], // Array of strings for multiple skills
        required: false
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

// Create a model from the schema
const Signup = mongoose.model('Signup', signupSchema);

module.exports = Signup;
