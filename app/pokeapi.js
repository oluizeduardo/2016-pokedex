"use strict"

// dependencies
const express = require("express")
const router = express.Router()
const pokeDB = require("./pokeDB.json")

// private
function catchPokemon(pokeId) {
    return pokeDB.find(poke => poke.id === pokeId)
}

// public api
router.get("/", (request, response) => {
    response.json(pokeDB)
})


router.get(`/:pokeId`, (request, response) => {
    let pokeId = request.params.pokeId
    let pokeData = catchPokemon(pokeId)
    
    if(pokeData){
        response.json(pokeData)
    }
    else{
        response.status(404).send(`Not Found!`)
    }
})


// export router
module.exports = router