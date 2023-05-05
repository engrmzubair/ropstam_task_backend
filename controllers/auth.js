const jwt = require('jsonwebtoken');
const User = require('../models/user');
const sendEmail = require('../utils/sendEmail');
const config = require('../config');


async function signup(req, res) {
    const { name, email } = req.body;

    try {
        // Check if user already exists with the same email
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists with this email' });
        }

        // Generate a random password for the user
        const randomPassword = User.generateRandomPassword();

        // Create new user object
        const user = new User({ name, email, password: randomPassword });

        // Save the user object to the database
        await user.save();

        // Send a welcome email to the user with the randomly generated password
        const emailSubject = 'Welcome to MERN Stack App';
        const emailBody = `Hi ${name},<br/><br/>
        Thank you for signing up for Ropstom App. Your account has been created successfully.
        Please use the following password to login to your account: <b>${randomPassword}</b><br/><br/>
        Best Regards,<br/>Ropstom Team`;
        await sendEmail(email, emailSubject, emailBody);

        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error occurred while registering user' });
    }
}

// Authenticates a user and generates an access token for them

async function login(req, res) {
    const { email, password } = req.body;

    try {
        // Check if user exists with the provided email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Check if the provided password matches the stored password for the user
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate an access token for the user
        const token = jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: config.jwtExpiresIn });

        return res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error occurred while logging in user' });
    }
}

module.exports = {
    signup,
    login,
};
