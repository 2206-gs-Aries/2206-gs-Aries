const router = require('express').Router()
const { models: { Fruit, Veggie }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const fruits = await Fruit.findAll()
    const veggies = await Veggie.findAll()
    res.send({fruits, veggies})
  } catch (err) {
    next(err)
  }
})