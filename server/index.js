// server/index.js
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.post('/api/send-email', async (req, res) => {
  const { formData, product } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // your Gmail address
      pass: process.env.EMAIL_PASS, // app password
    },
  });

  const mailOptions = {
    from: `"Online Store" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // same email, or client/your team email
    subject: `New Order from ${formData.name}`,
    html: `
      <h2>New Order Details</h2>
      <p><strong>Product:</strong> ${product.name}</p>
      <p><strong>Category:</strong> ${product.category}</p>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.countryCode || ''} ${formData.phone}</p>
      <p><strong>Quantity:</strong> ${formData.quantity}</p>
      <p><strong>Address:</strong> ${formData.address}</p>
      <p><strong>Message:</strong> ${formData.customMessage}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Email sending failed' });
  }
});


// Listener
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


