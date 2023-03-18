const express = require('express')
const router = express.Router()
const apiController = require("../controllers/apiController")
const {check} = require('express-validator')
const {validateName} = require('../midleware/validateName')

//     http://localhost:8080/api/

router.get( '/show',apiController.showGames)

router.get('/search/:name',validateName, apiController.searchGame)

router.get('/external', apiController.externalApi)

router.post('/create', [
    check("name").not().isEmpty().withMessage("mandatory field"),
    check("genre").not().isEmpty().withMessage("mandatory field")
],apiController.createGame)

router.put('/edit/:name',validateName,[
    check("name").not().isEmpty().withMessage("mandatory field"),
    check("genre").not().isEmpty().withMessage("mandatory field")
],apiController.editGame)

router.delete('/delete/:name', validateName, apiController.deleteGame)


module.exports = router