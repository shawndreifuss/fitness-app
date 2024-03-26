const { User, UserSettings } = require("../models");
const bcrypt = require("bcrypt");
// JWT Token Middleware
const { createToken } = require("../middleware/createToken");

// Send Email Middleware
const { sendMail } = require("../utils/sendMail");



// Register User  - POST /api/auth/register
module.exports.Register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email }).lean(); // Use lean() for performance if you're only reading data
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Create User 
    const user = await User.create({ email, password, settings: null });
    // Create User Settings Defaults
    const userSettings = await UserSettings.create({userId: user._id});
    user.settings = userSettings._id;

    // Save User
    await user.save();
    // Create Token
    const token = createToken(user._id);  
    // Set secure: true in production for HTTPS
    res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
    return res.status(201).json({ success: true, message: "Welcome " + user.email,  user: {
      ...user.toObject(), // Convert Mongoose model instance to a plain JavaScript object
      userSettings: userSettings.toObject() // Include user settings in the response
    }});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Login User - POST /api/auth/register
module.exports.Login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email }).lean();
      if (!user) {
        return res.status(400).json({ message: "User does not exist" });
      }
  
      const validatePassword = await bcrypt.compare(password, user.password);
      if (!validatePassword) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      const token = createToken(user._id);
      res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
  
      return res.status(200).json({ success: true, message: "Welcome back " + user.email });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  };

//   Forgot Password Sending :resetToken- POST /api/auth/forgot-password
module.exports.ForgotPassword = async (req, res, next) => {
    try {
      // Get users email
      const { email } = req.body;
      const user = await User.findOne({ email });
      if(!user) return res.status(400).json({message: "User does not exist"});
      //  Create reset password token and save it to the user
      const resetToken = createToken();
      user.passwordResetToken = resetToken;
      user.passwordResetExpires = Date.now() + 3600000; // 1 hour
      await user.save(); 
    
      //  Send email to the user with the reset password token
      const resetURL = `http://localhost:5173/forgot-password/${resetToken}`;
      const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;
      
      //  Send email to the user
      try {
        await sendMail({
          email: user.email,
          subject: "Your password reset token (valid for 10 minutes)",
          message,
        });
        res.status(200).json({success: true, message: "Token sent to email"});
      } catch (error) {
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        await user.save();
        res.status(500).json({success: false, message: "There was an error sending the email. Try again later!"});
      }
    } catch (error) {
      res.status(500).json({success: false, message: error.message});
    }
  }
  

