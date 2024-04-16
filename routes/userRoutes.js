const express = require("express");
const router = express.Router();
const { registerUser, loginUser, currentUser } = require("../controllers/userController.js")

router.post("/register",registerUser)

router.post("/login",loginUser)
 
router.get("/current",currentUser)
 

<<<<<<< HEAD
module.exports = router 
=======
module.exports = router
>>>>>>> origin/main
