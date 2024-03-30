const router = require('express').Router();
const { Register, Login, Logout, ForgotPassword, ChangePassword, UpdateUserPassword, GetMe, OAuth, GetUserSettings, UpdateUserSettings } = require('../../controllers/authController');
const verifyToken = require('../../middleware/verifyToken');


router.post('/register', Register);
router.post('/login', Login);
router.post('/forgot-password', ForgotPassword);
router.post('/login/forgot-password/:resetToken', ChangePassword);
router.patch('/:userId/update-password', UpdateUserPassword);
router.get('/me', verifyToken, GetMe);
router.get('/logout', Logout);
router.post('/oauth', OAuth);

// Update User Settings 
router.get('/user-settings/:userId', GetUserSettings);
router.put('/user-settings/:userId/update-settings', UpdateUserSettings);



module.exports = router;