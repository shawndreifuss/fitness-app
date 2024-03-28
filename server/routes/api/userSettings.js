const router = require('express').Router();
const { GetUserSettings, UpdateUserSettings} = require('../../controllers/userSettingsController');

router.get('/:userId', GetUserSettings);
router.put('/:userId/update-settings', UpdateUserSettings);





module.exports = router;