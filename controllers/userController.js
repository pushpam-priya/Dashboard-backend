const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, address, phone, password } = req.body;
    const userAvailable = await User.find({ email: email });
    // console.log(userAvailable);
    if (userAvailable.length > 0) {
      res.status(400);
      throw new Error("User already registered!");
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
    //   console.log(hashedPassword);
      const user = User.create({
        firstName,
        lastName,
        email,
        address,
        phone,
        password: hashedPassword
      });
      if(user){
        return res.status(201).json({_id:user.id, email:user.email});
      }
      else{
        res.status(400);
        throw new Error("Invalid User data");
      }
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });
      if (!user) {
        throw new Error("User not found");
      }
  
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (isPasswordMatch) {
        return res.json({ message: "Logged in successfully" });
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};
  

const currentUser = async (req, res) => {
  try {
    res.json({ message: "Current User" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { registerUser, loginUser, currentUser };
