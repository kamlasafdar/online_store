// server/sendEmail.js
const nodemailer = require("nodemailer");
require("dotenv").config({ path: "./server.env" });

const sendEmail = async (formData, product) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,      // your Gmail address
      pass: process.env.EMAIL_PASS       // app password
    }
  });

  const mailOptions = {
    from: `"Your Store" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // send email to yourself (or client)
    subject: `New Order for ${product.name}`,
    html: `
      <h2>Order Details</h2>
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

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
