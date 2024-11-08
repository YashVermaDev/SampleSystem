const express = require('express');
const authMiddleware = require('../middleware/auth');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/create', userController.createUser);
router.get('/many', userController.getAllUser);
router.get('/one/:id', authMiddleware, userController.getUserById);
router.put('/edit/:id', authMiddleware, userController.updateUser);
router.delete('/delete/:id', authMiddleware, userController.deleteUser);

module.exports = router;