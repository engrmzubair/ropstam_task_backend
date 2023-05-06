const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const swaggerUi = require("swagger-ui-express");
const { port, nodeEnv, dbUri } = require('./config');
const authRouter = require('./routes/auth');
const carRouter = require('./routes/car');
const categoryRouter = require('./routes/category');
const errorHandlerMiddleware = require('./middleware/error');
const swaggerDoc = require("./docs")

const app = express();

// Connect to MongoDB
mongoose
    .connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error(err);
    });

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', authRouter);
app.use('/api/cars', carRouter);
app.use('/api/categories', categoryRouter);

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Error handler middleware
app.use(errorHandlerMiddleware);

// Start the server
app.listen(port, () => {
    console.log(`Server running in ${nodeEnv} mode on port ${port}`);
});
