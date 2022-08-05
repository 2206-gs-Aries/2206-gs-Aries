'use strict'

const {db, models: {User, Product, Cart} } = require('../server/db')

const products = [
  {
    name: "Apple",
    imageUrl:
      "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png",
    description:
      "The fruit is a fleshy drupe (stone fruit) that is generally heart-shaped to nearly globular, measures about 2 cm (1 inch) in diameter, and varies in colour from yellow through red to nearly black.",
      quantity: 50,
      price: 0.99,
    fruitOrVeggie: "fruit"
  },
  {
    name: "Strawberry",
    imageUrl:
      "https://www.gardeningknowhow.com/wp-content/uploads/2021/07/strawberry.jpg",
    description:
      "Strawberries are soft, sweet, bright red berries. They're also delicious. Strawberries have tiny edible seeds, which grow all over their surface. When ripe, strawberries smell wonderful and taste even better. You can make jam, pie, strawberry shortcake, and more with strawberries.",
    quantity: 30,
    price: 1.5,
    fruitOrVeggie: "fruit"
  },
  {
    name: "Banana",

    description:
      "A banana is a curved, yellow fruit with a thick skin and soft sweet flesh. If you eat a banana every day for breakfast, your roommate might nickname you 'the monkey.' A banana is a tropical fruit that's quite popular all over the world. It grows in bunches on a banana tree.",
    quantity: 25,
    price: 0.5,
    fruitOrVeggie: "fruit"
  },
  {
    name: "Broccoli",
    imageUrl:
      "https://domf5oio6qrcr.cloudfront.net/medialibrary/5390/h1218g16207258089583.jpg",
    description:
      "Broccoli, Brassica oleracea, is an herbaceous annual or biennial grown for its edible flower heads which are used as a vegetable. The broccoli plant has a thick green stalk, or stem, which gives rise to thick, leathery, oblong leaves which are gray-blue to green in color.",
    quantity: 40,
    price: 1.25,
    fruitOrVeggie: "veggie"
  },
  {
    name: "Cucumber",
    imageUrl:
      "https://www.plantgrower.org/uploads/6/5/5/4/65545169/published/cucumber-slices.jpg?1516496438",
    description:
      "Cucumber is a summer vegetable, with elongate shape and 15cm long. Its skin is of a green colour, turning into yellow in maturation. At present, it is found in the European markets all over the year. Fresh or pickled cucumbers are also available.",
    quantity: 42,
    price: 0.75,
    fruitOrVeggie: "veggie"
  },
  {
    name: "Kale",
    imageUrl: "https://specialtyproduce.com/sppics/7631.png",
  
    quantity: 15,
    price: 0.5,
    fruitOrVeggie: "veggie"
  },
];
/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
  ])

  await Promise.all(
    products.map((product) => {
      return Product.create(product)
    })
  )



  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    }
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
