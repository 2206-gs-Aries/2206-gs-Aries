const router = require("express").Router();
const { Fruit } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const fruit = await Fruit.findAll();

    res.json(fruit);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
