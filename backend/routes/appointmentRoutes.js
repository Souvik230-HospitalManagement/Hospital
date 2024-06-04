
const express = require('express');
const { createAppointment } = require('../controllers/appointmentController');

const router = express.Router();

router.post('/book-appointment', createAppointment);

module.exports = router;






// const express = require('express');
// const router = express.Router();
// const { bookAppointment, acceptAppointment, rejectAppointment } = require('../controllers/appointmentController');

// router.post('/book-appointment', bookAppointment);
// router.get('/accept/:id', acceptAppointment);
// router.get('/reject/:id', rejectAppointment);

// module.exports = router;
