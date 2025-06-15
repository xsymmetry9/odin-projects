//saved as /router/userRouter.js

const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

router.get('/', userController.getMessages);
router.get('/new', userController.plotForm);
router.post('/new', userController.readForm);

module.exports = router;