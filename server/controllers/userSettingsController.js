const { UserSettings } = require('../models'); // Make sure the path is correct

exports.updateUserAddress = async (req, res) => {
  const { userId } = req.params;
  const { street, city, state, zip, country } = req.body;

  try {
    const updatedUserSettings = await UserSettings.findOneAndUpdate(
      { userId: userId }, // Find by userId
      {
        $set: {
          "shippingAddress.street": street,
          "shippingAddress.city": city,
          "shippingAddress.state": state,
          "shippingAddress.zip": zip,
          "shippingAddress.country": country,
        }
      },
      { new: true, upsert: true } // options - return new document and upsert
    );

    if (!updatedUserSettings) {
      return res.status(404).json({ message: 'UserSettings not found' });
    }

    res.json({ message: 'Address updated successfully', userSettings: updatedUserSettings });
  } catch (error) {
    console.error('Error updating user address:', error);
    res.status(500).json({ message: 'Failed to update address' });
  }
};
