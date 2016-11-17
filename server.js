"use strict"

// dependencies
const express = require("express")
const bodyParser = require("body-parser")

// express configuration
const app = express()
app.use(bodyParser.json())
app.use(express.static("public"))

// welcome
app.get("/", function (request, response) {
  response.sendFile('index.html')
})

// poke api endpoint
app.use("/api/pokemons", require("./app/pokeApi"))

// start server
const hostname = "localhost"
const port = 3000
app.listen(port, _ => console.log(`Server started: http://${hostname}:${port}`))