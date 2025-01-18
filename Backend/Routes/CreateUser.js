const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post("/createuser", async(req, res) => {
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

    // await User.create({
    //   username: "sneha_roy",
    //   name: "Sneha Roy",
    //   password: "123455",
    //   email: "sneharoy@gmail.com",
    //   location: "Kolkata"
    // })
    // res.json({success: true, message: "User created successfully"});
  } catch (error) {
    console.log(error);
    res.json({success: false, message: "User creation failed"});
  }
})

module.exports = router;