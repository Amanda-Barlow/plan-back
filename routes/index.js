const router = require("express").Router()
const planRoute = require("./planRoutes.js")

router.use('/plan', planRoute) 

module.exports = router
