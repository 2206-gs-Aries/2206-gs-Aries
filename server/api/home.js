const router = require('express').Router()
const { models: { Product, Cart, Order }} = require('../db')
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

router.post('/', async (req, res, next) => {
  try {
    const orderProduct = await Order.findOne({
      where: {
        name: req.body.name,
      }
    })
    if (!orderProduct ) {
      const newOrder = await Order.create({
        name: req.body.name,
        quantity: 1,
        userId: req.body.userId,
        price: req.body.price,
        imageUrl: req.body.imageUrl
      })
      res.send(newOrder)
    } else {
      orderProduct.quantity ++;
      await orderProduct.save()
      res.send(orderProduct)
    }
    // res.send(await Cart.create(req.body))
    await Cart.create(req.body)
  } catch(err) {
    next(err)
  }
})



router.delete('/:id', async (req, res, next) => {
  try {
    const product = await Cart.findByPk(req.params.id)
    await product.destroy()
    res.send(product)
  } catch(err) {
    next(err)
  }
})


