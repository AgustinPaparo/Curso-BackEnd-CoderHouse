const { Socket } = require('dgram')
const express = require ('express')
const {Server: HttpServer } = require ('http')
const {Server: IOServer } = require ('socket.io')

const app = express()
const httpServer = HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static('./public'))

const mensajes = [
    {author: 'Agustin', mensaje: ' aprendiendo esta shit'},
    {author: 'Alejandro', mensaje: ' no entiendo esta shit'},
    {author: 'Paparo', mensaje: ' F para esta shit'},
]

io.on('connection' , socket=> {
    console.log('Un cliente conectado')

    socket.emit('messages' , mensajes)

    socket.on('new-message' , data => {
        mensajes.push(data)

        io.socket.emit('messages' , mensajes)
    })
})


const PORT = 8080

httpServer.listen(PORT , () => {
    console.log (`Servidor escuchando el puerto ${PORT}`)
})