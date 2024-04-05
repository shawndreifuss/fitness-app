const { User } = require('../models');

// Add to favorites
 module.exports.addFavorite = async (req, res) => {
    const { userId } = req.params;
    const { workoutId } = req.body;
  
    try {
      const user = await User.findById(userId);
      if (!user) return res.status(404).send('User not found');
  
      // Prevent duplicates
      if (!user.favorites.includes(workoutId)) {
        user.favorites.push(workoutId);
        await user.save();
      }
  
      res.status(200).send('Workout added to favorites');
    } catch (error) {
      res.status(500).send('Server error');
    }
  };
  
  // Remove from favorites
  module.exports.removeFavorite = async (req, res) => {
    const { userId } = req.params;
    const { workoutId } = req.body;
  
    try {
      const user = await User.findById(userId);
      if (!user) return res.status(404).send('User not found');
  
      user.favorites = user.favorites.filter(id => id.toString() !== workoutId);
      await user.save();
  
      res.status(200).send('Workout removed from favorites');
    } catch (error) {
      res.status(500).send('Server error');
    }
  };