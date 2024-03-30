const { User, UserSettings, Fitness } = require("../models");
const bcrypt = require("bcrypt");
// JWT Token Middleware
const { createToken } = require("../middleware/createToken");

// Send Email Middleware
const sendMail = require("../utils/sendMail");

// Register User  - POST /api/auth/register
module.exports.Register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists please login" });
    }
    // Create User
    const user = await User.create({ email, password, settings: null });
    // Create User Settings and fitness Defaults
    const userSettings = await UserSettings.create({ userId: user._id });
    const fitness = await Fitness.create({ userId: user._id });

    user.settings = userSettings._id;
    user.fitness = fitness._id;

    // Save User
    await user.save();
    // Create Token
    const token = createToken(user._id);
    return res.status(201).json({
      success: true,
      message: "Welcome " + user.email,
      token,
      user: {
        ...user.toObject(), // Convert Mongoose model instance to a plain JavaScript object
        userSettings: userSettings.toObject(), // Include user settings in the response
      },
    });
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
      return res
        .status(400)
        .json({ message: "User does not exist please create an account" });
    }

    const validatePassword = await bcrypt.compare(password, user.password);
    console.log(password, user.password);
    if (!validatePassword) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = createToken(user._id);

    return res.status(200).json({
      success: true,
      token,
      message: "Welcome back to the fitness App",
    });
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
    if (!user)
      return res
        .status(400)
        .json({ message: "User with that email does not exist" });

    //  Create reset password token and save it to the user
    const resetToken = createToken();
    user.passwordResetToken = resetToken;
    user.passwordResetExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    //  Send email to the user with the reset password token
    const resetURL = `http://localhost:5173/login/forgot-password/${resetToken}`;
    const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;

    //  Send email to the user
    try {
      await sendMail({
        email: user.email,
        subject: "Your password reset token (valid for 10 minutes)",
        message,
      });
      res.status(200).json({ success: true, message: "Token sent to email" });
    } catch (error) {
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;
      await user.save();
      console.log(error);
      res.status(500).json({
        success: false,
        message: "There was an error sending the email. Try again later!",
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Reset and change Password - POST /api/auth/forgot-password/:resetToken
module.exports.ChangePassword = async (req, res, next) => {
  try {
    //  Get user based on the token
    const { password } = req.body;
    const { resetToken } = req.params;

    const newPassword = password;
    const user = await User.findOne({
      passwordResetToken: resetToken,
      passwordResetExpires: { $gt: Date.now() },
    });
    if (!user)
      return res
        .status(400)
        .json({ message: "Token is invalid or has expired" });
    //  If token has not expired, and there is user, set the new password

    user.password = newPassword;
    user.passwordResetToken = undefined; // Clear the reset token
    user.passwordResetExpires = undefined; // Clear the token expiry
    await user.save();
    console.log("Password reset successful");
    console.log(user);

    //  Log the user in, send JWT
    const token = createToken(user._id);
    res
      .status(200)
      .json({ success: true, token, message: "Password reset successful" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update user password with current password /api/auth/:userId/update-password
module.exports.UpdateUserPassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const userId = req.params.userId;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).send("Current password is incorrect");
    }

    // Directly hash the new password with bcrypt to avoid double hashing
    const saltRounds = 10; // Use the same salt rounds as in your middleware
    const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);

    // Update the user's password field directly without triggering the 'save' middleware
    await User.findByIdAndUpdate(userId, { $set: { password: hashedNewPassword } });

    res.send("Password updated successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating password");
  }
};
// Get Current User - GET /api/auth/me
module.exports.GetMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).populate("settings").lean();
    if (!user) {
      return next("User not found");
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return next("new ErrorHandler(error.message, 500)");
  }
};

//  Logout /api/auth/logout
module.exports.Logout = async (req, res, next) => {
  res.json({ message: "Logout successful" });
};

//  Handle Google Login and register  /api/auth/oauth
module.exports.OAuth = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    // If user exists, log them in
    if (existingUser) {
      const token = createToken(existingUser._id);

      return res.status(200).json({
        success: true,
        message: "Welcome back ",
        existingUser,
        token,
      });
      // If user does not exist, register them
    } else {
      const user = await User.create({ email, password });
      const token = createToken(user._id);
      return res.status(201).json({
        success: true,
        message: "Welcome ",
        user,
        token,
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get user settings by userId  api/user-settings/:userId
module.exports.GetUserSettings = async (req, res) => {
  try {
    const userSettings = await UserSettings.findOne({
      userId: req.params.userId,
    })
      .populate("userId")
      .lean();
    if (!userSettings) {
      return res.status(404).send();
    }
    res.send(userSettings);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.UpdateUserSettings = async (req, res) => {
  try {
    // Log the incoming request body for debugging
    console.log("req.body", req.body);

    // Destructure field and value from the request body
    const { field, value } = req.body;

    console.log("field", field, "value", value);

    // Prepare the update operation
    const update = { $set: { [field]: value } };

    // Find the user settings document and apply the update
    const userSettings = await UserSettings.findOneAndUpdate(
      { userId: req.params.userId }, // Ensure the userId param is correctly passed from the client
      update,
      { new: true, runValidators: true }
    );
    console.log("userSettings", userSettings);
    // Check if the user settings document was found and updated
    if (!userSettings) {
      return res.status(404).send("User settings not found");
    }

    // Respond with the updated user settings document
    res.status(200).send(userSettings);
  } catch (error) {
    console.error("Error updating user settings:", error);
    res.status(500).send(error.message);
  }
};
