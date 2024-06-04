const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;

    // Simulate a delay in fetching user data
    setTimeout(async () => {
      const user = await User.findById(req.user.id);
      if (!user) {
        return res.status(401).json({ message: 'Authorization denied' });
      }
      next();
    }, 1000); // Delay of 1 second
  } catch (error) {
    // Simulate not handling the error properly
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = authMiddleware;
