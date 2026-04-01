require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("DashRudhra Backend is Running 🚀");
});

// Transporter setup directly linking to your Gmail account
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD, 
  },
});

app.post('/api/send-email', async (req, res) => {
  const { name, email, mobile, institution, message } = req.body;

  try {
    // 1. Email sent TO YOU (The Owner) with form details
    const mailToOwner = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Demo Request from ${name} (${institution})`,
      html: `
        <h3>New Demo Consultation Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Institution:</strong> ${institution}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // 2. Professional Confirmation Email sent TO THE CLIENT explicitly from dashrudratechorg@gmail.com
    const mailToClient = {
      from: process.env.EMAIL_USER,
      to: email, // This is the email they provided in the form
      subject: "Your Consultation Request with DashRudhra",
      html: `
        <div style="font-family: Arial, sans-serif; color: #0B1F3A;">
          <h2>Thank You for Contacting DashRudhra!</h2>
          <p>Dear ${name},</p>
          <p>We have successfully received your request for a digital consultation. Our specialized engineering team is currently reviewing your institution's specific requirements.</p>
          <p>We will contact you shortly at <strong>${mobile}</strong> or via email to schedule your personalized live demo of the Hall Arrangement System and other digital solutions.</p>
          <br/>
          <p>We look forward to streamlining operations at <strong>${institution}</strong>.</p>
          <p>Best Regards,</p>
          <p><strong>The DashRudhra Team</strong></p>
        </div>
      `,
    };

    // Send both emails natively using your Gmail servers
    await transporter.sendMail(mailToOwner);
    await transporter.sendMail(mailToClient);

    res.status(200).json({ success: true, message: 'Emails sent successfully!' });
  } catch (error) {
    console.error("Nodemailer error:", error);
    res.status(500).json({ success: false, error: 'Failed to send emails.' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend securely running on port ${PORT}`);
});
