const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  category: {
    type: String,
    enum: ['cardio', 'arms', 'legs', 'abs', 'full body', 'back', 'chest', 'shoulders', 'core', 'upper body', 'lower body', 'strength', 'flexibility', 'balance', 'endurance', 'power', 'speed', 'agility', 'coordination', 'reaction time', 'muscle endurance', 'muscle strength', 'muscle power', 'muscle speed', 'muscle agility', 'muscle coordination', 'muscle reaction time'],
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  images: [String],
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
      type: Number,
      required: true
    },
    intensity: {
      type: String,
      enum: ['low', 'medium', 'high'],
      required: true
    },
    sets: Number, // For strength exercises
    reps: Number, // For strength exercises
    distance: Number, // For cardio exercises, in kilometers or miles
    difficulty: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  coach: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
