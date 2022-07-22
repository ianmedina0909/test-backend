const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");
const { postCreateHero, postRemoveHeroes, postUpdateHeroes, getHeroes } = require("../controller/heroes")

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//heroes api

//post 
router.post('/create/heroes', postCreateHero)
router.post('/update/heroes', postUpdateHeroes)
router.post('/delete/heroes', postRemoveHeroes)
//get
router.get('/heroes', getHeroes)


module.exports = router