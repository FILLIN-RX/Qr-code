const express = require("express")
const router = express.Router()
const controllers = require("../controllers/UserControlleur")
router.get('/', controllers.get)


module.exports = router