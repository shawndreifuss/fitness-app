const mongoose = require("mongoose");

const fitnessSchema = new mongoose.Schema({
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
      enum: ["vegetarian", "vegan", "ketogenic", "paleo", "none"],
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
  progressPhotos: [{ type: String }], // Array of image URLs
  healthMetrics: {
    bodyFatPercentage: { type: Number },
    restingHeartRate: { type: Number },
    bloodPressure: { type: String }, // Example: "120/80"
  },
  dietaryRestrictions: [{ type: String }], // Example: ["gluten-free", "lactose intolerant"]
  workoutPreferences: {
    duration: { type: Number, default: 30 }, // In minutes
    intensity: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    activities: [{ type: String }], // Example: ["cycling", "swimming"]
  },
});

module.exports = mongoose.model("Fitness", fitnessSchema);
