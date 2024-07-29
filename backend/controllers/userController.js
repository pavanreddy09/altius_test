const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const userRegister = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUserExist = await User.findOne({ email: email });
    if (isUserExist) {
      return res
        .status(400)
        .json({ message: `User with a email ${email} is already exist` });
    }

    const hashpassword = await bcrypt.hash(password, 10);
    const user = new User({
      email,
      password: hashpassword,
    });
    await user.save();

    res.status(201).json({ message: "Register Sucessful!" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong try again" });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUserExist = await User.findOne({ email: email });
    if (!isUserExist) {
      return res
        .status(404)
        .json({ message: `User with a email ${email} is not found` });
    }

    if (await bcrypt.compare(password, isUserExist.password)) {
      return res.status(200).json({ message: "logged in Sucessful!" });
    } else {
      return res.status(400).json({ message: "Incorrect password" });
    }
  } catch (err) {
    res.status(500).json({ message: "Something went wrong try again" });
  }
};

module.exports = { userRegister, userLogin };
