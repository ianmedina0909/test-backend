const Hero = require("../models/hero");

const Createhero = async (req) => {
    const heroes = new Hero(req.body)   
    await heroes.save()
    return heroes
}

const RemoveHero = async (req) => {
    const id  = req.body.id 
    const res = await Hero.findByIdAndRemove(id)
    return res
}

const UpdateHero = async (req) => {
    const id  = req.body.id
    const update = req.body.content 
    const res = await Hero.findByIdAndUpdate(id, update) 
    return res
}

const Heroes = async () => {
    const res = await Hero.find() 
    return res
}


module.exports = {
    Createhero,
    RemoveHero,
    UpdateHero,
    Heroes
} 