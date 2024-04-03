function generateWorkouts() {
  const categories = ['cardio', 'arms', 'legs', 'abs', 'full body', 'back', 'chest', 'shoulders', 'core', 'upper body', 'lower body', 'strength', 'flexibility', 'balance', 'endurance', 'power', 'speed', 'agility', 'coordination', 'reaction time', 'muscle endurance', 'muscle strength', 'muscle power', 'muscle speed', 'muscle agility', 'muscle coordination', 'muscle reaction time'];
  let workouts = [];

  categories.forEach(category => {
    for (let i = 0; i < 10; i++) { // Generate 10 workouts for each category
      const workout = {
        date: new Date().toISOString(),
        category: category,
        coach: "660b97ad5884c97ef470a494",
        thumbnail: "https://example.com/thumbnail.jpg",
        images: ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
        exercises: [{
          name: `Exercise ${i + 1} for ${category}`,
          type: "strength", // This should vary based on the exercise
          duration: 30, // Example duration in minutes
          intensity: "medium", // Example intensity
          sets: 3, // Example sets
          reps: 12, // Example reps
          distance: 5, // Example distance for cardio
          difficulty: "beginner", // Example difficulty
          notes: "This is a sample exercise for a workout."
        }],
        difficulty: "intermediate", // Overall workout difficulty
        notes: `These are general notes for a ${category} workout.`,
       
      };
      workouts.push(workout);
    }
  });

  return JSON.stringify(workouts, null, 2);
}

module.exports = generateWorkouts;
