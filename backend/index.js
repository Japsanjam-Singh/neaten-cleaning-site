// backend/index.js

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/send', async (req, res) => {
  const { name, email, phone, typeOfCleaning, location, message, referral } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to owner
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: `Quote Request Submission - ${name}`,
      html: `
        <h2>New Service Quote Request</h2>
        <p>You have received a new quote request through the Neaten website. The details are as follows:</p>
        
        <table cellpadding="8" cellspacing="0" border="1" style="border-collapse: collapse;">
          <tr><td><strong>Full Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email Address</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone Number</strong></td><td>${phone}</td></tr>
          <tr><td><strong>Type of Cleaning Requested</strong></td><td>${typeOfCleaning}</td></tr>
          <tr><td><strong>Service Location</strong></td><td>${location}</td></tr>
          <tr><td><strong>How They Heard About Us</strong></td><td>${referral}</td></tr>
          <tr><td><strong>Message / Additional Info</strong></td><td>${message || 'N/A'}</td></tr>
        </table>
    
        <br/>
        <p>Please follow up with the client at your earliest convenience.</p>
        <p>— Neaten Web Services</p>
      `,
    });
    
    // Email to client
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your Quote Request Has Been Received – Neaten Cleaning Services',
      html: `
        <p>Dear ${name},</p>
    
        <p>Thank you for getting in touch with <strong>Neaten Cleaning Services</strong>.</p>
    
        <p>We have received your request regarding <strong>${typeOfCleaning}</strong> services for the location: <strong>${location}</strong>. Our team is currently reviewing your message and will reach out to you within the next 24–48 hours to discuss your needs in more detail and provide a personalized quote.</p>
    
        <p>If you have any urgent questions or need to make changes to your request, please don't hesitate to reply to this email or contact us directly at <a href="mailto:${process.env.EMAIL_USER}">${process.env.EMAIL_USER}</a>.</p>
    
        <p>Here is a summary of your request:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Type of Cleaning:</strong> ${typeOfCleaning}</li>
          <li><strong>Location:</strong> ${location}</li>
          <li><strong>Message:</strong> ${message || 'N/A'}</li>
          <li><strong>Referral Source:</strong> ${referral}</li>
        </ul>
    
        <br/>
        <p>We appreciate your interest in Neaten, and we look forward to assisting you soon.</p>
    
        <p>Warm regards,<br/>
        <strong>The Neaten Team</strong><br/>
        www.neatenservices.com</p>
      `,
    });
    

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).json({ message: 'Failed to send emails' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));