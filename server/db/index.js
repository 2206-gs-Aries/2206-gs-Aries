//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Fruit = require('./models/Fruit')
const Veggie = require('./models/Veggie')

//associations could go here!



module.exports = {
  db,
  models: {
    User,
    Fruit,
    Veggie
  },
}
