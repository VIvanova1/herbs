const Herbs = require("../models/Herbs");

const router = require("express").Router();

router.get("/catalog", async (req, res) => {
  try {
    const herbs = await Herbs.find();
    res.status(200).json(herbs);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("internal server error");
  }
});

module.exports = router;
