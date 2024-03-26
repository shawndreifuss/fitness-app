const router = require('express').Router();
const { Register, Login, ForgotPassword } = require('../../controllers/authController');



router.post('/register', Register);
router.post('/login', Login);
router.post('/forgot-password', ForgotPassword);





module.exports = router;