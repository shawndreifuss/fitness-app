const mongoose = require("mongoose");

const fitnessSchema = new mongoose.Schema({
  // Your schema definition remains unchanged
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",

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
    enum: ["male", "female", "other"],
    default: "other",
  },
  phone: {
    type: String,
    default: "",
  },
  preferences: {
    dietary: {
      type: String,
      enum: ["vegetarian", "vegan", "keto", "paleo", "none"],
      default: "none",
    },
    workoutLocation: {
      type: String,
      enum: ["home", "gym", "outdoors", "none"],
      default: "none",
    },
  },
  activityLevel: {
    type: String,
    enum: [
      "sedentary",
      "lightly active",
      "moderately active",
      "very active",
      "extra active",
    ],
    default: "sedentary",
  },
  fitnessGoals: [
    {
      type: String,
      enum: [
        "lose weight",
        "gain muscle",
        "run a marathon",
        "increase stamina",
        "flexibility",
        "other",
      ],
      default: "lose weight",
    },
  ],
  progressPhotos: [{ type: String }],
  healthMetrics: {
    bodyFatPercentage: { type: Number },
    restingHeartRate: { type: Number },
    bloodPressure: { type: String },
  },
  dietaryRestrictions: [{ type: String }],
  workoutPreferences: {
    duration: { type: Number, default: 30 },
    intensity: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    activities: [{ type: String }],
  },
  workoutHistory: [
    {
      date: { type: Date, default: Date.now },
      duration: { type: Number, default: 30 },
      activity: { type: String },
      caloriesBurned: { type: Number },
    },
  ],
}, { collection: 'fitness' }); // Specify the collection name here

const Fitness = mongoose.model("Fitness", fitnessSchema);

module.exports = Fitness;