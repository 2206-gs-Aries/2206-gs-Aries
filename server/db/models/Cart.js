const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define("cart", {
    product: {
        type: Sequelize.STRING
    }
})

module.exports = Cart