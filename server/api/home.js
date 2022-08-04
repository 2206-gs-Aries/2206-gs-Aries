const router = require('express').Router()
const { models: { Product }} = require('../db')
module.exports = router



router.get('/', async (req, res, next) => {
    try {
      let product = await Product.findAll()
      res.send(product)
    } catch (err) {
      next(err)
    }
  })

router.get('/:id', async (req, res, next) => {
    try {
        let product = await Product.findByPk(req.params.id)
        res.send(product)
    } catch (err) {
        next(err)
    }
})