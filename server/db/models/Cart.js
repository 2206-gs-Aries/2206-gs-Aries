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
})

module.exports = Cart