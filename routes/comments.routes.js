const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comments.controller.js');

router.post('/create', commentController.doCreate);

module.exports = router;