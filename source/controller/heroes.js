const  { Createhero, RemoveHero, UpdateHero, Heroes }  = require('../services/heroes')

/*
 * call other imported services, or same service but different functions here if you need to
*/

const postCreateHero = async (req, res, next) => {
    try {
      const results = await Createhero(req)
      res.send(results)
    } catch(err) {
      res.send({message : err})
    }
}

const postRemoveHeroes = async (req, res, next) => {
     try {
        const results = await RemoveHero(req)
        res.send(results)
    } catch(err) {
        res.send({message : err})
    }
}


const postUpdateHeroes = async (req, res, next) => {
    try {
       const results = await UpdateHero(req)
       res.send(results)
   } catch(err) {
       res.send({message : err})
   }
}


const getHeroes = async (req, res, next) => {
    try {
       const results = await Heroes(req)
       res.send(results)
   } catch(err) {
       res.send({message : err})
   }
}

  
module.exports = {
    postCreateHero,
    postRemoveHeroes,
    postUpdateHeroes,
    getHeroes
}