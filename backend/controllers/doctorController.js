const Doctor = require('../models/Doctor'); // Assuming doctors are stored here

exports.getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find().select('name');
    res.json(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

