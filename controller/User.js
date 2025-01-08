const Signup = require('../model/User.js'); 

// Controller to handle signup logic
const signupUser = async (req, res) => {
    try {
        // Destructure data from the request body
        const { name, email, phone, address, skills } = req.body;

        // Check if the user already exists
        const existingUser = await Signup.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this email' });
        }

        // Create a new user document
        const newUser = new Signup({
            name,
            email,
            phone,
            address,
            skills
        });

        // Save the new user to the database
        await newUser.save();

        // Return success response
        return res.status(201).json({
            message: 'User signed up successfully',
            user: newUser
        });
    } catch (error) {
        console.error('Error signing up user:', error.message);
        return res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    signupUser
};
