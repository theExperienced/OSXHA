const express = require('express');

const { postSignup, postLogin, postLogout } = require('../controllers/user');
const { authenticateToken } = require('../utils/authenticateToken');

const router = express.Router();

router.post('/signup', postSignup);
router.post('/login', postLogin);
router.post('/logout', authenticateToken, postLogout);


module.exports = router;