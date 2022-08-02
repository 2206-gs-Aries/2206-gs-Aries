const Sequelize = require('sequelize')
const db = require('../db')

const Fruit = db.define("fruit", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue:
      "https://i0.wp.com/onlymyenglish.com/wp-content/uploads/2020/11/Flowers-Name-1-min.png?fit=707%2C1000&ssl=1",
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 100,
    },
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      isDecimal: true,
      min: 0.0,
      max: 1000,
    },
  },
  inSeason: {
    type: Sequelize.ENUM("YES", "NO"),
    defaultValue: "YES",
    allowNull: false,
  },
});

module.exports = Fruit