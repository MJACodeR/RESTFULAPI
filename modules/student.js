const mongoose = require("mongoose");
const validator = require('validator');
const StudentSchema = new mongoose.Schema({
  StudentID: {
    type: Number,
    required: true,
    unique: true,
  },

  Name: {
    //Built-In Validation
    type: String,
    unique:true,
    required: true,
    lowercase: true,
    minlength: 4,
    maxlength: 30,
  },
  //epm package validations
  email: {
    type: String,
    required: true,
    unique: [true, "Email id already present"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  // Custom Validation ,
  phone: {
    type: Number,
    minlength: 10,
    maxlength: 10,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true
  },
  active: Boolean,
});

// collection create

const Student = new mongoose.model("Student", StudentSchema);


module.exports = Student;




