const router = require('express').Router();
const { Register, Login, ForgotPassword, ChangePassword,GetMe } = require('../../controllers/authController');
const verifyToken = require('../../middleware/verifyToken');


router.post('/register', Register);
router.post('/login', Login);
router.post('/forgot-password', ForgotPassword);
router.post('/forgot-password/:resetToken', ChangePassword);
router.get('/me', verifyToken, GetMe);

// To Do 
// router.post('/oauth', OAuth);
// router.get('/logout', Logout);








module.exports = router;