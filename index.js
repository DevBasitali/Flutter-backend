const express = require('express');
const connectDB = require('./db');
const app = express();
const PORT =5000;
const user=require('./routes/user.js')
app.use(express.json());

// routes define
app.use('/api',user)
app.listen(PORT, () => {
    
// Connect to the database
connectDB();
    console.log(`Server running on port ${PORT}`);
});
