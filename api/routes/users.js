const express = require('express');
const user = require('../models/User');
const router = express.Router();

const userController = require('../controller/user_controller');
//create
// router.post("/", userController.createUser);
//update
router.put("/:id", userController.updateUser);
//delete
router.delete("/id:",userController.deleteUser);
//get

router.get("/id:", userController.getUser);
//getall

router.get("/", userController.getAllUser);

module.exports = router;