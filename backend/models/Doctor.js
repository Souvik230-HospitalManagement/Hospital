// const mongoose = require('mongoose');

// const DoctorSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   specialization: {
//     type: String,
//     required: true
//   }
// });

// module.exports = mongoose.model('Doctor', DoctorSchema);


const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  specialty: {
    type: String,
    required: true
  },
  qualifications: {
    type: String,
    required: true
  },
  experience: {
    type: String,
  }
});

module.exports = mongoose.model('Doctor', DoctorSchema);
