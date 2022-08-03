const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
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
      "https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2012/09/vegetables-and-fruits-farmers-market.jpg",
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
  unitPrice: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isDecimal: true,
      min: 0,
      max: 1000,
    },
  },
  fruitOrVeggie: {
    type: Sequelize.ENUM("FRUIT", "VEGGIE"),
    defaultValue: "FRUIT",
    allowNull: false,
  },
});

module.exports = Product;
