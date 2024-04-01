const router = require('express').Router();
const { updateUserAddress } = require('../../controllers/userSettingsController');

router.put('/:userId/update-address', updateUserAddress);

module.exports = router;

