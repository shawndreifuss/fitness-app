const router = require('express').Router();
const authRoutes = require('./auth');
const userSettingsRoutes = require('./userSettings');

router.use('/auth', authRoutes);
router.use('/user-settings', userSettingsRoutes);




module.exports = router;