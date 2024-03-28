const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    min: 3,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
  }, 
  phone: {
    type: String,
    default: "",
  },
  avatar: {
    type: String,
    default: "https://m.media-amazon.com/images/I/41jLBhDISxL.jpg",
  },
  settings: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserSettings",
  },
  fitness: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Fitness",
  },
  favorites: {
    type: Array,
    default: [],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  lastLogin: {
    type: Date,
    default: Date.now,
  },
  achievements: [{ type: String }],
  passwordResetToken: String,
  passwordResetExpires: Date,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//  Hash password before saving to database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("User", userSchema);
