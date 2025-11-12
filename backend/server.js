// const express = require('express');
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// require('dotenv').config();
// const path = require('path'); 

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USERNAME,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });


// // ------------------- CONTACT FORM -------------------
// app.post('https://api.gorkharide.com/api/contact', async (req, res) => {
//     const { name, email, message } = req.body;
//     if (!name || !email || !message) return res.status(400).json({ message: 'Please fill all contact fields' });

//     try {
//         await transporter.sendMail({
//             from: email,
//             to: process.env.EMAIL_USERNAME,
//             subject: `New Contact Form Submission from ${name}`,
//             text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//         });
//         res.status(200).json({ message: 'Contact form submitted successfully!' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Error sending contact form' });
//     }
// });

// // ------------------- VENDOR FORM -------------------
// app.post('https://api.gorkharide.com/api/vendor', async (req, res) => {
//   const { name, email, phone, address } = req.body;

//   if (!name || !email || !phone || !address) {
//       return res.status(400).json({ message: 'Please fill all vendor fields' });
//   }

//   try {
//       await transporter.sendMail({
//           from: email,
//           to: process.env.EMAIL_USERNAME,
//           subject: `New Vendor Partner Registration: ${name}`,
//           text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}`,
//       });

//       // ✅ Always respond with JSON
//       res.status(200).json({ message: 'Vendor form submitted successfully!' });
//   } catch (err) {
//       console.error('Nodemailer error:', err);
//       res.status(500).json({ message: 'Error sending vendor form', error: err.toString() });
//   }
// });

// // ------------------- DRIVER FORM -------------------
// app.post('https://api.gorkharide.com/api/driver', async (req, res) => {
//   const { name, email, phone, address } = req.body;

//   if (!name || !email || !phone || !address) {
//       return res.status(400).json({ message: 'Please fill all vendor fields' });
//   }

//   try {
//       await transporter.sendMail({
//           from: email,
//           to: process.env.EMAIL_USERNAME,
//           subject: `New Vendor Partner Registration: ${name}`,
//           text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}`,
//       });

//       // ✅ Always respond with JSON
//       res.status(200).json({ message: 'Vendor form submitted successfully!' });
//   } catch (err) {
//       console.error('Nodemailer error:', err);
//       res.status(500).json({ message: 'Error sending vendor form', error: err.toString() });
//   }
// });

// // ------------------- EXPERT FORM -------------------
// app.post('https://api.gorkharide.com/api/expert', async (req, res) => {
//   const { name, email, phone, address } = req.body;

//   if (!name || !email || !phone || !address) {
//       return res.status(400).json({ message: 'Please fill all vendor fields' });
//   }

//   try {
//       await transporter.sendMail({
//           from: email,
//           to: process.env.EMAIL_USERNAME,
//           subject: `New Vendor Partner Registration: ${name}`,
//           text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}`,
//       });

//       // ✅ Always respond with JSON
//       res.status(200).json({ message: 'Vendor form submitted successfully!' });
//   } catch (err) {
//       console.error('Nodemailer error:', err);
//       res.status(500).json({ message: 'Error sending vendor form', error: err.toString() });
//   }
// });
// // ------------------- BOOK EXPERT FORM -------------------
// app.post('https://api.gorkharide.com/api/book-expert', async (req, res) => {
//   console.log('Received request:', req.body); // Log incoming request
//   const { name, phone, address, service, time } = req.body;

//   if (!name || !phone || !address || !service || !time) {
//     console.log('Validation failed:', req.body);
//     return res.status(400).json({ message: 'Please fill all booking fields' });
//   }

//   try {
//     await transporter.sendMail({
//       from: `"Expert Services" <${process.env.EMAIL_USERNAME}>`,
//       to: process.env.EMAIL_USERNAME, // only sending to your email_username
//       subject: `New Expert Booking Request from ${name}`,
//       text: `Name: ${name}\nPhone: ${phone}\nAddress: ${address}\nService: ${service}\nTime: ${time}`,
//     });

//     res.status(200).json({ message: 'Expert booking request submitted successfully!' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ message: 'Error sending expert booking request' });
//   }
// });


// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

