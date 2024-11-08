const express = require('express');
const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/authRoutes')

const app = express();

app.use(express.json()); 

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

module.exports = app;
