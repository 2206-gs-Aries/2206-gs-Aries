const router = require('express').Router()
const { models: { Fruit, Veggie }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const fruits = await Fruit.findAll()
    res.send(fruits)
  } catch (err) {
    next(err)
  }
})