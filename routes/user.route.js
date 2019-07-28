const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/getUserList', userController.getUserList);
router.post('/createUser', userController.createUser);
router.get('/getUserById/:id', userController.getUserById);
router.post('/userUpdate/:id', userController.updateUser);
router.delete('/deleteUser/:id', userController.deleteUser);


module.exports = router;