const { UserSettings, User} = require('../models');



// Get user settings by userId  api/user-settings/:userId
module.exports.GetUserSettings =  async (req, res) => {
    try {
      const userSettings = await UserSettings.findOne({ userId: req.params.userId }).populate('userId').lean();
      if (!userSettings) {
        return res.status(404).send();
      }
      res.send(userSettings);
    } catch (error) {
      res.status(500).send(error);
    }
  }

// Update Notification Settings api/user-settings/:userId/user-settings
module.exports.UpdateUserSettings = async (req, res) => {

    // Examples of what field and value could be field = notifications.email value = true
    try {
      const { field, value } = req.body; 
      const update = { $set: { [field]: value } };
  
      const userSettings = await UserSettings.findOneAndUpdate(
        { userId: req.params.userId },
        update,
        { new: true, runValidators: true }
      );
  
      if (!userSettings) {
        return res.status(404).send('User settings not found');
      }
      res.status(200).send(userSettings);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }