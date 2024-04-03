const router = require('express').Router();
const {
  createWorkout,
  findAllWorkouts,
  findWorkoutById,
  deleteWorkoutById,
  updateWorkoutById,
  findWorkoutsByCategory, 
  findWorkoutsByCoach,    
  findWorkoutsByName,   
  findWorkoutsBySearch,   
} = require('../../controllers/workoutController');

// Creating a workout
router.post('/create-workout', createWorkout);

// Retrieving all workouts
router.get('/all-workouts', findAllWorkouts);

// Search for workouts by multiple criteria
router.get('/search', findWorkoutsBySearch);

// Retrieving a workout by its ID
router.get('/:id', findWorkoutById);

// Deleting a workout by its ID
router.delete('/:id/delete', deleteWorkoutById);

// Updating a workout by its ID
router.put('/:id/update', updateWorkoutById);

// New routes based on the new functions

// Finding workouts by category
router.get('/category/:category', findWorkoutsByCategory);

// Finding workouts by coach
router.get('/coach/:coachId', findWorkoutsByCoach);

// Finding workouts by exercise name
router.get('/exercise/:name', findWorkoutsByName);

module.exports = router;
