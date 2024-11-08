const express = require('express');
const authMiddleware = require('../middleware/auth');
const authController = require('../controllers/authController')
const router = express.Router();

router.post('/register', authController.register);
router.get('/login', authController.login);


module.exports = router;