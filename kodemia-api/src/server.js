//Definición de nuestro servidor
const express = require('express')

const server = express()
const kodersRouter = require('./routers/koders')
//Middlewares
// server.use(express.json()); //best use
//Agregábamos los routers
server.use('/koders', kodersRouter)

module.exports = server

//Requerimiento 
//endpoint GET /koders
// 1. Asegurarnos que nuestro MODELO existe
// 2. Crear el caso de uso necesario
// 3. Crear el endpoint -> 


//Tarea 
//POST koders
//DELETE /koders/:id -> findByIdAndDelete