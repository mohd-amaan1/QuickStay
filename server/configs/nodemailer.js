import nodemailer from 'nodemailer';

// Create a transporter object using the SMTP settings
const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com', 
    port: 587, 
    auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASS,
    },
});

// Export the transporter
export default transporter;