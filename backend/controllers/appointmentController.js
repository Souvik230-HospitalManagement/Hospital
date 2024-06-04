const Appointment = require('../models/Appointment');
const nodemailer = require('nodemailer');

const createAppointment = async (req, res) => {
    const { name, email, appointmentDate, doctorSpecialty } = req.body;

    try {
        // Create appointment
        const newAppointment = new Appointment({ name, email, appointmentDate, doctorSpecialty });
        await newAppointment.save();

        // Set up email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: email,
            to: 'souviknabadwip8520@gmail.com',
            subject: 'New Appointment Booking',
            text: `Name: ${name}\nAppointment Date: ${appointmentDate}\nDoctor Specialty: ${doctorSpecialty}`
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).json({ success: false, error: error.message });
            }
            res.status(200).json({ success: true, message: 'Appointment booked successfully and email sent!' });
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = { createAppointment };









// const nodemailer = require('nodemailer');
// const Appointment = require('../models/Appointment');

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS
//     }
// });

// exports.bookAppointment = async (req, res) => {
//     const { name, email, appointmentDate, doctorSpecialty } = req.body;

//     try {
//         const appointment = new Appointment({ name, email, appointmentDate, doctorSpecialty });
//         await appointment.save();

//         const acceptUrl = `http://localhost:5000/api/appointments/accept/${appointment._id}`;
//         const rejectUrl = `http://localhost:5000/api/appointments/reject/${appointment._id}`;

//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: process.env.EMAIL_USER,
//             subject: 'Appointment Booking',
//             text: `Name: ${name}\nEmail: ${email}\nDate: ${appointmentDate}\nSpecialty: ${doctorSpecialty}\n\nAccept: ${acceptUrl}\nReject: ${rejectUrl}`
//         };

//         await transporter.sendMail(mailOptions);

//         res.status(201).json({ message: 'Appointment booked successfully and email sent' });
//     } catch (error) {
//         console.error('Error booking appointment:', error);
//         res.status(500).json({ message: 'Error booking appointment' });
//     }
// };

// exports.acceptAppointment = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const appointment = await Appointment.findById(id);

//         if (!appointment) {
//             return res.status(404).json({ message: 'Appointment not found' });
//         }

//         appointment.status = 'Accepted';
//         await appointment.save();

//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: appointment.email,
//             subject: 'Appointment Accepted',
//             text: `Dear ${appointment.name}, your appointment for ${appointment.doctorSpecialty} on ${appointment.appointmentDate} has been accepted.`
//         };

//         await transporter.sendMail(mailOptions);

//         res.status(200).json({ message: 'Appointment accepted and user notified' });
//     } catch (error) {
//         console.error('Error accepting appointment:', error);
//         res.status(500).json({ message: 'Error accepting appointment' });
//     }
// };

// exports.rejectAppointment = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const appointment = await Appointment.findById(id);

//         if (!appointment) {
//             return res.status(404).json({ message: 'Appointment not found' });
//         }

//         appointment.status = 'Rejected';
//         await appointment.save();

//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: appointment.email,
//             subject: 'Appointment Rejected',
//             text: `Dear ${appointment.name}, your appointment for ${appointment.doctorSpecialty} on ${appointment.appointmentDate} has been rejected.`
//         };

//         await transporter.sendMail(mailOptions);

//         res.status(200).json({ message: 'Appointment rejected and user notified' });
//     } catch (error) {
//         console.error('Error rejecting appointment:', error);
//         res.status(500).json({ message: 'Error rejecting appointment' });
//     }
// };
