const express = require('express')
const router = express.Router()
const admin = require('./modules/admin')
const passport = require('../../config/passport')
const restController = require('../../controllers/apis/restaurant-controller')
const userController = require('../../controllers//apis/user-controller')
const { apiErrorHandler } = require('../../middleware/error-handler')

router.use('/admin', admin)
router.get('/restaurants', restController.getRestaurants)
router.use('/', apiErrorHandler)
router.post('/signin', passport.authenticate('local', { session: false }), userController.signIn)

module.exports = router
