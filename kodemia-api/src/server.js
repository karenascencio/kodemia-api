//Definición de nuestro servidor
const express = require('express')

const server = express()
const kodersRouter = require('./routers/koders')
const mentorsRouter = require('./routers/mentors')
//Middlewares
server.use(express.json()); 
//Agregábamos los routers
server.use('/koders', kodersRouter)
server.use('/mentors', mentorsRouter)

module.exports = server

//Requerimiento 
//endpoint GET /koders
// 1. Asegurarnos que nuestro MODELO existe
// 2. Crear el caso de uso necesario
// 3. Crear el endpoint -> 


//Tarea 
//POST koders
//DELETE /koders/:id -> findByIdAndDelete