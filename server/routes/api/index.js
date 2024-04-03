const router = require('express').Router();
const authRoutes = require('./auth');
const userSettingsRoutes = require('./userSettings');
const workoutRoutes = require('./workouts');

router.use('/auth', authRoutes);
router.use('/user-settings', userSettingsRoutes);
router.use('/workouts', workoutRoutes);




module.exports = router;