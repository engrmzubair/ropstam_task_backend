const nodemailer = require('nodemailer');
const config = require('../config');



const transporter = nodemailer.createTransport({
    service: config.smtpService,
    host: config.smtpHost,
    port: config.smtpPort,
    secure: false, // true for 465, false for other ports
    auth: {
        user: config.smtpUser, // generated ethereal user
        pass: config.smtpPassword, // generated ethereal password
    },
});

const sendEmail = async (to, subject, text, html) => {

    try {
        const info = await transporter.sendMail({
            from: config.emailFrom,
            to,
            subject,
            text,
            html,
        });
        console.log('Email sent: ', info.messageId);
        return info;
    } catch (error) {
        console.log('Error sending email: ', error);
        throw error;
    }
};

module.exports = sendEmail;
