const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  exercises: [{
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['cardio', 'strength', 'flexibility', 'balance'],
      required: true
    },
    duration: {
      type: Number, // Duration in minutes
      required: true
    },
    intensity: {
      type: String,
      enum: ['low', 'medium', 'high'],
      required: true
    },
    likes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    dislikes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    notes: String
  }],
  completed: {
    type: Boolean,
    default: false
  },
  coach: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
