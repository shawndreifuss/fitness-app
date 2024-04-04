const {Workout} = require("../models");



// Create a new workout - POST /api/workouts
module.exports.createWorkout = async (req, res) => {
    try {
      const workoutDetails = req.body; // Assume workoutDetails are provided in the request body
      const workout = new Workout(workoutDetails);
      await workout.save();
      res.status(201).json({
        success: true,
        data: workout,
        message: "Workout created successfully",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server Error" });
    }
  };

// Find workouts by primary or secondary muscles - GET /api/auth/workouts/muscles/:muscle
module.exports.findWorkoutsByMuscle = async (req, res) => {
  try {
    const muscle = req.params.muscle;
    // Using $or operator to search both primaryMuscles and secondaryMuscles fields
    const workouts = await Workout.find({
      $or: [
        { primaryMuscles: muscle },
        { secondaryMuscles: muscle }
      ]
    });

    if (workouts.length === 0) {
      return res.status(404).json({ success: false, message: "No workouts found matching the specified muscle group" });
    }
    
    res.status(200).json({ success: true, data: workouts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
  module.exports.findWorkoutsByCoach = async (req, res) => {
    try {
      const coachId = req.params.coachId;
      const workouts = await Workout.find({ coach: coachId });
      if (workouts.length === 0) {
        return res.status(404).json({ success: false, message: "No workouts found for this coach" });
      }
      res.status(200).json({ success: true, data: workouts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server Error" });
    }
  };

  module.exports.findWorkoutsByName = async (req, res) => {
    try {
      const exerciseName = req.params.name;
      const workouts = await Workout.find({ "exercises.name": { $regex: exerciseName, $options: 'i' } });
      if (workouts.length === 0) {
        return res.status(404).json({ success: false, message: "No workouts found with that exercise name" });
      }
      res.status(200).json({ success: true, data: workouts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server Error" });
    }
  };
  
  
  

  module.exports.findAllWorkouts = async (req, res) => {
    try {
      const workouts = await Workout.find({});
      res.status(200).json({ success: true, data: workouts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server Error" });
    }
  };
//   Find a workout by ID - GET /api/workouts/:id
  module.exports.findWorkoutById = async (req, res) => {
    try {
      const id = req.params.id;
      const workout = await Workout.findById(id);
      if (!workout) {
        return res.status(404).json({ success: false, message: "Workout not found" });
      }
      res.status(200).json({ success: true, data: workout });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server Error" });
    }
  };


  module.exports.updateWorkoutById = async (req, res) => {
    try {
      const id = req.params.id;
      const workoutDetails = req.body;
      const workout = await Workout.findByIdAndUpdate(id, workoutDetails, { new: true });
      if (!workout) {
        return res.status(404).json({ success: false, message: "Workout not found" });
      }
      res.status(200).json({ success: true, data: workout, message: "Workout updated successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server Error" });
    }
  };

  module.exports.deleteWorkoutById = async (req, res) => {
    try {
      const id = req.params.id;
      const workout = await Workout.findByIdAndDelete(id);
      if (!workout) {
        return res.status(404).json({ success: false, message: "Workout not found" });
      }
      res.status(200).json({ success: true, message: "Workout deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server Error" });
    }
  };

module.exports.findWorkoutsBySearch = async (req, res) => {
    const { q: searchTerm, category, difficulty } = req.query;

    try {
        let query = {};

        // Search term condition (if provided)
        if (searchTerm) {
            const regex = new RegExp(searchTerm, 'i'); // Case-insensitive
            query.$or = [
                { category: regex },
                { 'exercises.name': regex },
                { 'exercises.notes': regex },
                { thumbnail: regex },
                // Add other fields you want to search within here
            ];
        }

        // Category condition (if provided and not 'all')
        if (category && category !== "all") {
            query.category = category;
        }

        // Difficulty condition (within nested exercises array, if provided)
        if (difficulty) {
            query["exercises.difficulty"] = difficulty;
        }

        const workouts = await Workout.find(query);
        res.json(workouts);
    } catch (error) {
        console.error('Failed to search workouts:', error);
        res.status(500).send('Server error while searching workouts');
    }
};
