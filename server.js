/**
 * @Author: Ali Ismail
 * @Date:   2018-04-11T13:12:48+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2018-05-11T12:58:06+02:00
 */
 const express = require('express')
 const app = express()

 const connections = []
 const title = 'untitled Presentation'

 app.use(express.static('./socket-client/public'))
 app.use(express.static('./node_modules/bootstrap/dist'))

 const port = 3000

 const server = app.listen(port)
 const io = require('socket.io').listen(server)

 io.sockets.on('connection', function (socket) {
   socket.once('disconnect', function () {
     connections.splice(connections.indexOf(socket),1)
     socket.disconnect()
     console.log('Disconnected: %s sockets remaining',connections.length)
   })
   socket.emit('welcome', {
     title:title
   })
   connections.push(socket)
   console.log('connected: %s sockets connected',connections.length)
 })
console.log("server is running on " + port)
