const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/Flutterbackend';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); // Exit the process with failure
    }
};
module.exports = connectDB;
