const express = require('express');
const authController = require('../controller/auth_controller.js');
const router = express.Router();


router.post("/register", authController.register);
module.exports = router;