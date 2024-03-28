const mongoose = require('mongoose');

const UserSettingsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  notifications: {
    email: { type: Boolean, default: true },
    sms: { type: Boolean, default: false }, 
    push: { type: Boolean, default: false },
  },
  workoutSettings: {
    reminders: { type: Boolean, default: true },
    reminderTime: { type: String, default: '09:00' }, // Could be more sophisticated to handle time zones
    autoTrack: { type: Boolean, default: true },
  },
  nutritionalSettings: {
    calorieGoal: { type: Number, default: 2000 },
    dietaryRestrictions: [
      {
        type: String,
      enum: ["Keto", "Vegetarian", "other"],
    default: "other"
      }
    ], 
  },
  dataSharing: {
    shareWithResearch: { type: Boolean, default: true },
    shareWithPartners: { type: Boolean, default: true },
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});



const UserSettings = mongoose.model('UserSettings', UserSettingsSchema);

module.exports = UserSettings;

