const router = require("express").Router();
const {
  models: { Fruit, Veggie },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const fruit = await Fruit.findAll();

    res.send(fruit);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
