const express = require('express');
const router = express.Router();

const { login, signup } = require('../controllers/auth');
const { validateRequest } = require('../utils/validateRequest');
const { loginValidation, signupValidation } = require('../utils/validations/userValidation');

// Route to create a user
router.post('/signup', validateRequest(signupValidation), signup);

// Route to login
router.post('/login', validateRequest(loginValidation), login);

module.exports = router;