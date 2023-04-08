const express = require("express");
const router = express.Router();
const usersControllers = require("../controllers/usersController");


router
    .route("/")
    .get(usersControllers.verifyUser)
    .post(usersControllers.createUser)


module.exports = router;