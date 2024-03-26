const router = require('express').Router();
const { Register, Login, ForgotPassword, ChangePassword } = require('../../controllers/authController');



router.post('/register', Register);
router.post('/login', Login);
router.post('/forgot-password', ForgotPassword);
router.post('/forgot-password/:resetToken', ChangePassword);





module.exports = router;