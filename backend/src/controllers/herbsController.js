const Herbs = require("../models/Herbs");
const errorHandler = require("../utils/error");
const herbsManager = require("../managers/herbsManager.js");
const router = require("express").Router();
const { isAuth } = require('../middlewares/authMiddleware');


router.get("/catalog", async (req, res) => {
  try {
    const herbs = await herbsManager.getAll();
    res.status(200).json(herbs);
  } catch (err) {
    res.status(err.statusCode).json(err.message);
  }
});

router.post("/new", isAuth, async (req, res) => {
  try {
    const { name, latin, image, description } = req.body;
    const owner = req.user._id;

    if (!name) {
      throw errorHandler(404, "Name is required!");
    } else if (!latin) {
      throw errorHandler(404, "Latin Name is required!");
    } else if (!image) {
      throw errorHandler(404, "Image is required!");
    } else if (!description) {
      throw errorHandler(404, "Description is required!");
    }
    const newHerb = new Herbs({
      name,
      latin,
      image,
      description,
      owner
    });

    await herbsManager.create(newHerb);
    res.status(201).json(newHerb);
  } catch (err) {
    res.status(err.statusCode).json(err.message);
  }
});

router.get("/details/:id",isAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const herb = await herbsManager.findById(id);
    if (!herb) {
      throw errorHandler(404, "Herb not found");
    }
    res.status(200).json(herb);

  } catch (err) {
    res.status(err.statusCode).json(err.message);
  }
});

router.put("/edit/:id", isAuth, async(req, res)=>{
  try {
    const id =req.params.id;
    const herb = req.body;

    const newherb = await herbsManager.edit(id, herb);
    console.log('newherb', newherb);
    res.status(200).json(newherb);

  } catch (err) {
    res.status(err.statusCode).json(err.message);
  }
})

module.exports = router;
