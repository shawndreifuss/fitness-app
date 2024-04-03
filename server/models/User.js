const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    min: 3,
    max: 255,
  },
  firstName: {
    type: String,
    min: 3,
    max: 255,
  },
  lastName: {
    type: String,
    min: 3,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
  }, 
  phone: {
    type: String,
    default: "7605555555",
  },
  avatar: {
    type: String,
    default: "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1711929600&semt=ais",
  },
  goal: {
    type: String,
    default: "lose weight",
  },
  settings: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserSettings",
  },
  fitnessStats: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Fitness",
  },
  favorites: {
    type: Array,
    Workout: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workout",
    },
    likes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workout",
    },
    dislikes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workout",
    }
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

const User = mongoose.model("User", userSchema);

module.exports = User;