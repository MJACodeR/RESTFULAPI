const Student = require("../modules/student");

const createUser = async (req, res) => {
  try {
    const user = Student(req.body);
    console.log(user)
    const CreateUser = await user.save();
    res.status(201).send(CreateUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

const GetUser = async (req, res) => {
  try {
    const Getuser = await Student.find();
    res.status(202).send(Getuser);
  } catch (error) {
    res.status(400).send(error);
  }
};

const GetUserFind = async (req, res) => {
  try {
    const _id = req.params.id;
   const  GetuserFind = await Student.findById(_id);
    res.status(200).send(GetuserFind);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const _id = req.params.id;
   const  DeleteUser = await Student.findOneAndDelete(_id);
    if (!DeleteUser) {
      return res.status(404).send("Pages Does'not exits");
    } else {
      res.send(DeleteUser);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateUser = async (req, res) => {
  try {
   const _id = req.params.id;
   const UpdateUser = await Student.findByIdAndUpdate(_id, req.body);
    if (!UpdateUser) {
      return res.status(404).send("Pages Does'not exits");
    } else {
      res.send(UpdateUser);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { createUser, GetUser, GetUserFind, deleteUser, updateUser };
