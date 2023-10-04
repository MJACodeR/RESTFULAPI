const express = require('express');
const router = express.Router();
const { createUser,GetUser,GetUserFind,deleteUser,updateUser} = require('../controller/controller');


//Create data
router.post("/student",createUser);
  
//GET Users
router.get("/student",GetUser);
  
//GET Single User
router.get("/student/:id",GetUserFind);
  
//Delete Data
router.delete("/student/:id",deleteUser);
  
//Update the student By it id
router.patch("/student/:id",updateUser);


module.exports = router;