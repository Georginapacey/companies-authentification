const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller.js');

router.get('/create', userController.create);
router.post('/create', userController.doCreate);

module.exports = router;