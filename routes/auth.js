const express = require('express');
const router = express.Router();

const { login, signup } = require('../controllers/auth');
const { validateRequest } = require('../utils/validateRequest');
const { loginValidation, signupValidation } = require('../utils/validations/userValidation');

router.post('/signup', validateRequest(signupValidation), signup);
router.post('/login', validateRequest(loginValidation), login);

module.exports = router;