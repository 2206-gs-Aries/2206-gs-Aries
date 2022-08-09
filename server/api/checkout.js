const router = require('express').Router()
const { models: { User, Cart }} = require('../db')
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

  router.delete('/:id', async (req, res, next) => {
    try {
      const product = await Cart.findByPk(req.params.id)
      await product.destroy()
      res.send(product)
    } catch(err) {
      next(err)
    }
  })

  