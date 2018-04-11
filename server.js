/**
 * @Author: Ali Ismail
 * @Date:   2018-04-11T13:12:48+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-11T16:21:51+02:00
 */
 const express = require('express')

 const app = express()
 app.use(express.static('./socket-client/public'))
 const port = 3000
 const server = app.listen(port)
 const io = require('socket.io').listen(server)
 io.sockets.on('connection', function (socket) {
   console.log('connected: %s',socket.id)
 })
console.log("server is running on " + port)
