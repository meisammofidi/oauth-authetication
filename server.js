const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to database
connectDB();

app.use(express.json());

app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/articles', require('./routes/api/articles'))



const port = process.env.NODE || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`))