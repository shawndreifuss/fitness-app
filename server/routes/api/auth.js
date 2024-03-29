const router = require('express').Router();
const { Register, Login, Logout, ForgotPassword, ChangePassword,GetMe, OAuth, GetUserSettings, UpdateUserSettings } = require('../../controllers/authController');
const verifyToken = require('../../middleware/verifyToken');


router.post('/register', Register);
router.post('/login', Login);
router.post('/forgot-password', ForgotPassword);
router.post('/login/forgot-password/:resetToken', ChangePassword);
router.get('/me', verifyToken, GetMe);
router.get('/logout', Logout);
router.post('/oauth', OAuth);

// Update User Settings 
router.get('/user-settings/:userId', verifyToken, GetUserSettings);
router.put('/user-settings/:userId/update-settings', verifyToken, UpdateUserSettings);



module.exports = router;