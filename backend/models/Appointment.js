const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    appointmentDate: {
        type: Date,
        required: true
    },
    doctorSpecialty: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
