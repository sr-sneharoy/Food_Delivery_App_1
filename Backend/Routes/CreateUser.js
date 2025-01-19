const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

router.post("/createuser",
  [
  body('email').isEmail().withMessage('Email is invalid'), 
  body('name').isLength({min: 5}).withMessage('Name must be at least 6 characters'),
  body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters')
], 
  async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
  try {
    const { username, name, location, email, password } = req.body;
    await User.create({
      username,
      name,
      location,
      email,
      password
    });

    res.json({success: true, message: "User created successfully"});
  } catch (error) {
    console.log(error);
    res.json({success: false, message: "User creation failed"});
  }
})

module.exports = router;