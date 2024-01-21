const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const userManager = require("../managers/userManager");
const errorHandler = require("../utils/error");
const jwt = require("jsonwebtoken");
const {SECRET, TOKEN_KEY} = require("../config");

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPass = bcrypt.hashSync(password, 10);
  const user = new User({ name, email, password: hashedPass });

  try {
    const userExist = await userManager.findOne({ email });
    if (userExist) {
      throw errorHandler(409, "User already exist!");
    }

    const newUser = await userManager.register(user);

    const token = await generateToken(newUser);
    res.cookie(TOKEN_KEY, token, { httpOnly: true, secure: true });
    res.status(200).json(token);

  } catch (err) {
    res.status(err.statusCode).json(err.message);
  }
});


router.post("/login", async (req, res) => {
  const { email, password } = req.body

  try {
    // const token = req.cookies[TOKEN_KEY];
    const user = await userManager.findOne({ email });
    if(!user){
      throw errorHandler(404, 'User not found')
    }

    const validPass = bcrypt.compareSync(password, user.password);
    if(!validPass){
      throw errorHandler(401, 'Email or password is incorrect.')
    }

    const token =  await generateToken(user);
    res.cookie(TOKEN_KEY, token, { httpOnly: true, secure: true });
    res.status(200).json(token);
  } catch (err) {
    res.status(err.statusCode).json(err.message);
  }
});

async function generateToken(user) {
  const payload = {
    _id: user._id,
    email: user.email,
  };
  const token = await jwt.sign(payload, SECRET, { expiresIn: "1d" });
  return token;
}

module.exports = router;
