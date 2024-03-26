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
    push: { type: Boolean, default: true },
  },
  workoutSettings: {
    reminders: { type: Boolean, default: true },
    reminderTime: { type: String, default: '09:00' }, // Could be more sophisticated to handle time zones
    autoTrack: { type: Boolean, default: false },
  },
  nutritionalSettings: {
    calorieGoal: { type: Number, default: 2000 },
    macroSplit: { 
      carbs: { type: Number, default: 50 }, // Percentage
      protein: { type: Number, default: 30 }, // Percentage
      fats: { type: Number, default: 20 }, // Percentage
    },
    dietaryRestrictions: [{ type: String }], // Examples: ["Gluten-Free", "Vegan"]
  },
  social: {
    connectFacebook: { type: Boolean, default: false },
    connectTwitter: { type: Boolean, default: false },
    connectInstagram: { type: Boolean, default: false },
  },
  dataSharing: {
    shareWithResearch: { type: Boolean, default: false },
    shareWithPartners: { type: Boolean, default: false },
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

UserSettingsSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

module.exports = mongoose.model('UserSettings', UserSettingsSchema);
