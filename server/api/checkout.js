const router = require('express').Router()
const { models: { User, Cart, Order }} = require('../db')
module.exports = router


const requireToken = async (req, res, next) => {
    try {
      const token = req.headers.authorization;
      const user = await User.findByToken(token);
      req.user = user;
      next();
    } catch(error) {
      next(error);
    }
  };



// router.get('/',  async (req, res, next) => {
//     try {
//       let user = await User.findByToken(req.headers.authorization) 
//       let product = await Cart.findAll( {where:{userId: user.id}})
//       res.send(product)
//     } catch (err) {
//       next(err)
//     }
//   })

router.get('/',  async (req, res, next) => {
    try {
      let user = await User.findByToken(req.headers.authorization) 
      let product = await Order.findAll( {where:{userId: user.id}})
      res.send(product)
    } catch (err) {
      next(err)
    }
  })

router.put('/', async (req, res, next) => {
    try {
        const order = await Order.findByPk(req.params.id)
        console.log(req.params)
    }catch (err) {
        res.send(err)
    }
})


router.delete('/:id', async (req, res, next) => {
    try {
      const order = await Order.findByPk(req.params.id)
      const name = order.dataValues.name
      const userId = order.dataValues.userId
      let product = await Cart.findAll({where:{
        name: name,
        userId: userId
      }})
      await order.destroy()
      res.send(order)
      await product.map((x) => (
        x.destroy()
      ))
      res.send(product)
    } catch(err) {
      next(err)
    }
  })


  