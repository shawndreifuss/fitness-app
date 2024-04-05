const router = require('express').Router();
const authRoutes = require('./auth');
const userSettingsRoutes = require('./userSettings');
const workoutRoutes = require('./workouts');
const userRoutes = require('./user')

router.use('/auth', authRoutes);
router.use('/user-settings', userSettingsRoutes);
router.use('/workouts', workoutRoutes);
router.use('/users', userRoutes);




module.exports = router;