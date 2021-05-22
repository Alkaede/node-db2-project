const express = require("express")

const server = express()

// DO YOUR MAGIC
const carsRouter = require('./cars/cars-router')
server.use(express.json());

server.use('/api/cars', carsRouter)

server.get('/', (req, res) => {
  const message = 'Api is up!'
  res.status(200).json({message})
})


module.exports = server
