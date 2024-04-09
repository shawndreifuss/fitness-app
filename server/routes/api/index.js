const router = require('express').Router();
const authRoutes = require('./auth');
const workoutRoutes = require('./workouts');
const userRoutes = require('./user')
const commentRoutes = require('./comment');

router.use('/auth', authRoutes);
router.use('/workouts', workoutRoutes);
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);




module.exports = router;