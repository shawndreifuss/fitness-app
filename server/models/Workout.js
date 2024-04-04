const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
  duration: Number,
  intensity: {
    type: String,
    enum: ['low', 'medium', 'high']
  },
  sets: Number,
  reps: Number,
  distance: String,
  benefits: String,
  instructions: [String],
  restPeriod: Number,
  tempo: String,
});

const workoutSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  name: String,
  description: String,
  primaryMuscles: [String],
  secondaryMuscles: [String],
  mechanic: {
    type: String,
    enum: ['compound', 'isolation']
  },
  type: {
    type: String,
    enum: ['cardio', 'strength', 'flexibility', 'balance', 'endurance', 'power', 'speed', 'agility', 'coordination', 'reaction time']
  },
  equipment: [String],
  equipmentDetails: String,
  coach: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  thumbnail: String,
  images: [String],
  details: [detailSchema],
  difficulty: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced']
  },
  skillLevel: {
    type: String,
    enum: ['novice', 'intermediate', 'advanced', 'expert']
  },
  targetZone: {
    type: String,
    enum: ['upper body', 'lower body', 'full body']
  },
  caloriesBurnedPerMin: Number,
  recommendedEnvironment: {
    type: String,
    enum: ['indoor', 'outdoor', 'gym', 'home', 'anywhere']
  },
  completed: Boolean,
  video: [String],
  userFeedback: {
    rating: Number,
    comments: [String],
  },
  tags: [String],
}, { timestamps: true });

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
