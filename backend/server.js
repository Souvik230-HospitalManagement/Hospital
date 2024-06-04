
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const Doctor = require('./models/Doctor');

require('dotenv').config();

const app = express();

app.use(cors({
    origin: 'http://localhost:3000' // Assuming your React app runs on localhost:3000
}));

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/appointments', appointmentRoutes); // Ensure this line is correct

// Serve static files (like doctors.json)
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));









// const express = require('express');
// const connectDB = require('./config/db');
// const cors = require('cors');
// const authRoutes = require('./routes/authRoutes');
// const doctorRoutes = require('./routes/doctorRoutes');
// const appointmentRoutes = require('./routes/appointmentRoutes');
// const nodemailer = require('nodemailer');
// const fs = require('fs');
// const path = require('path');
// const Doctor = require('./models/Doctor');

// require('dotenv').config();

// const app = express();

// app.use(cors({
//     origin: 'http://localhost:3000' // Assuming your React app runs on localhost:3000
// }));

// // Connect to database
// connectDB();

// // Middleware
// app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/doctors', doctorRoutes);
// app.use('/api/appointments', appointmentRoutes);

// // Serve static files (like doctors.json)
// app.use(express.static(path.join(__dirname, 'public')));

// // Email configuration
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL_USER, // Your Gmail email address
//         pass: process.env.EMAIL_PASS // Your Gmail password
//     }
// });

// app.post('/api/contact', (req, res) => {
//     // Email sending logic for contact form
// });

// // Handle doctor registration and save details to MongoDB and JSON file
// app.post('/api/auth/register', async (req, res) => {
//     // Doctor registration logic
// });

// // Handle appointment booking
// app.post('/api/appointments/book-appointment', async (req, res) => {
//     const { name, email, appointmentDate, doctorSpecialty } = req.body;

//     // Send email notification
//     const mailOptions = {
//         from: email,
//         to: 'souviknabadwip8520@gmail.com', // Change this to your email address
//         subject: 'Appointment Booking',
//         text: `Name: ${name}\nEmail: ${email}\nAppointment Date: ${appointmentDate}\nDoctor Specialty: ${doctorSpecialty}`
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error('Error sending email:', error);
//             res.status(500).send('Error booking appointment');
//         } else {
//             console.log('Email sent:', info.response);
//             res.status(200).send('Appointment booked successfully');
//         }
//     });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
