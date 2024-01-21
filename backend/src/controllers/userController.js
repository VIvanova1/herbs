const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const userManager = require("../managers/userManager");
const errorHandler = require("../utils/error");
const jwt = require("jsonwebtoken");
const config = require("../config");


router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPass = bcrypt.hashSync(password, 10);
  const user = new User({ name, email, password: hashedPass });

  try {

    const userExist = await userManager.findOne({email});
    if (userExist) {
      throw errorHandler(409, "User already exist!");
    }

   const newUser= await userManager.register(user);
   const token = await generateToken(newUser);

   res.cookie(config.TOKEN_KEY, token,{httpOnly:true});
   res.status(200).json(token);


  } catch (err) {
    res.status(err.statusCode).json(err.message);
  }
});

// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const token = await userManager.login(email, password);

//     res.cookie(TOKEN_KEY, token);
//   } catch (err) {}
// });




async function generateToken(user) {
  const payload = {
    _id: user._id,
    email: user.email,
  };
  const token = await jwt.sign(payload, config.SECRET, { expiresIn: "1d" });
  return token;
}

module.exports = router;
