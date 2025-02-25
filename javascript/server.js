const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// إعداد nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,  // استخدم متغير البيئة هنا
    pass: process.env.EMAIL_PASS   // استخدم متغير البيئة هنا
  }
});

app.post('/contact', (req, res) => {
  const { name, email, phone, service, message } = req.body;

  if (name && email && phone && service && message) {
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,  // استخدم متغير البيئة هنا
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send('Failed to send your message. Please try again later.');
      } else {
        console.log('Email sent: ' + info.response);
        res.send('Your message has been sent successfully!');
      }
    });
  } else {
    res.status(400).send('Please fill in all fields.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});