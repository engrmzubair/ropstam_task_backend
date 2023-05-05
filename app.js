const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/config');

const app = express();

// Connect to MongoDB database
mongoose
    .connect(config.dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected successfully'))
    .catch((err) => console.error('Database connection error:', err));

// Set up middleware
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
