const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define("cart", {
    name: {
        type: Sequelize.STRING
    },
    imageUrl: {
        type: Sequelize.TEXT,
    },
    description: {
        type: Sequelize.TEXT,
    },
    quantity: {
        type: Sequelize.INTEGER,
    },
    price: {
        type: Sequelize.FLOAT,
    },
    fruitOrVeggie: {
        type: Sequelize.STRING
    },
    userId: {
        type: Sequelize.INTEGER
    }
})

Cart.findByToken = async function(token) {
    try {
      const {id} = await jwt.verify(token, process.env.JWT)
      const user = Cart.findByPk(id)
      if (!user) {
        throw 'nooo'
      }
      return user
    } catch (ex) {
      const error = Error('bad token')
      error.status = 401
      throw error
    }
  }

module.exports = Cart