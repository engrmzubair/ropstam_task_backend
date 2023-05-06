const jwt = require('jsonwebtoken');
const config = require('../config');


//This is auth middleware for checking jwt
function auth(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Missing authentication token' });
    }

    try {
        const decoded = jwt.verify(token, config.jwtSecret);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid authentication token' });
    }
}

module.exports = auth;
