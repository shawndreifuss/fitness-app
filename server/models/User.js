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
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    min: 6,
    max: 1024,
  },
  avatar: {
    type: String,
    default: "https://m.media-amazon.com/images/I/41jLBhDISxL.jpg",
  },
  settings: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserSettings",
  },
  favorites: {
    type: Array,
    default: [],
  },
  isAdmin: {
    type: Boolean,
    default: true,
  },
  age: {
    type: Number,
    default: 0,
  },
  weight: {
    type: Number,
    default: 0,
  },
    height: {
    type: Number,
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        default: 'other'
    },
    phone: {
        type: String,
        default: ''
    },
    preferences: {
        dietary: {
          type: String,
          enum: ['vegetarian', 'vegan', 'ketogenic', 'paleo', 'none'],
          default: 'none'
        },
        workoutLocation: {
          type: String,
          enum: ['home', 'gym', 'outdoors', 'none'],
          default: 'none'
        }
      },
      activityLevel: {
        type: String,
        enum: ['sedentary', 'lightly active', 'moderately active', 'very active', 'extra active'],
        default: 'sedentary'
      },
      fitnessGoals: [{
        type: String,
        enum: ['lose weight', 'gain muscle', 'run a marathon', 'increase stamina', 'flexibility', 'other'],
        default: 'lose weight'
      }],
      healthMetrics: {
        bodyFatPercentage: { type: Number },
        restingHeartRate: { type: Number },
        bloodPressure: { type: String } // Example: "120/80"
      },
      dietaryRestrictions: [{ type: String }], // Example: ["gluten-free", "lactose intolerant"]
      workoutPreferences: {
        duration: { type: Number, default: 30 }, // In minutes
        intensity: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
        activities: [{ type: String }] // Example: ["cycling", "swimming"]
      },
      subscriptionStatus: {
        type: Boolean,
        default: false
      },
      lastLogin: {
        type: Date,
        default: Date.now
      },
      progressPhotos: [{ type: String }], // URLs to images
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
