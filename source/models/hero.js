const mongoose = require("mongoose")

// Heroes

const Hero = new mongoose.Schema({
    name: String,
    skills: [String],
    description: String,
    image: String
})

module.exports = mongoose.model("hero", Hero)