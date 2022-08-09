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

// router.get('/:id',  async (req, res, next) => {
//     try {

//       let user = await Cart.findAll( {where:{userId: req.params.id}})
//       res.send(user)
//     } catch (err) {
//       next(err)
//     }
//   })

router.get('/',  async (req, res, next) => {
    try {
      let user = await User.findByToken(req.headers.authorization) 
      let product = await Cart.findAll( {where:{userId: user.id}})
      res.send(product)
    } catch (err) {
      next(err)
    }
  })

//   router.delete('/:id', async (req, res, next) => {
//     try {
//       const product = await Cart.findByPk(req.params.id)
      
//       if (product === null) {
//         id = req.params.id
//         const product1 = await Order.findByPk(id)
//         await product1.destroy()
        
//       } else {
//     const name = product.dataValues.name
//     const userId = product.dataValues.userId
//     const data = await Cart.findAll({
//       where: {
//           name: name,
//           userId: userId,
//       }
//     })
//       await data.map((x) => (
//         x.destroy()
//       ))
//       res.send(data)}
//     } catch(err) {
//       next(err)
//     }
//   })


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
      await product.map((x) => (
        x.destroy()
      ))
      res.send(product)
    } catch(err) {
      next(err)
    }
  })


  