const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/home',require('./home'))
router.use('/stripe',require('./stripe'))
router.use('/checkout',require('./checkout'))
router.use('/admin',require('./admin'))



router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
