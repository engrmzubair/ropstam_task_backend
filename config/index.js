const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    dbUri: process.env.DB_URI || 'mongodb://localhost:27017/mern-stack',
    jwtSecret: process.env.JWT_SECRET || 'mysecretkey',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
    smtpHost: process.env.SMTP_HOST || 'smtp.gmail.com',
    smtpPort: process.env.SMTP_PORT || 587,
    smtpUser: process.env.SMTP_USER || 'myemail@gmail.com',
    smtpPassword: process.env.SMTP_PASSWORD || 'mypassword',
    emailFrom: process.env.EMAIL_FROM || 'myemail@gmail.com',
};
