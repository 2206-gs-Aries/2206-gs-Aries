

const router = require("express").Router();
const {
  models: { Product },
} = require("../db");
module.exports = router;

router.get('/', async (req, res, next) => {
    try {
      let product = await Product.findAll()
      res.send(product)
    } catch (err) {
      next(err)
    }
  })

router.post("/", async (req, res, next) => {
  try {
    res.send(await Product.create(req.body));
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
    try {
      const product = await Product.findByPk(req.params.id);
      await product.destroy();
      res.send(product);
    } catch (error) {
      next(error);
    }
  });

  router.put('/update/:id', async (req, res, next) => {
    try {
    
      const product = await Product.findByPk(req.params.id);
      res.send(await product.update(req.body));
    } catch (error) {
      if(error.name === 'SequelizeUniqueConstraintError') {
        res.status(401).send('Email already exists')
      } else {
        next(error)
      }
    }
  });
  

