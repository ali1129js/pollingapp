/**
 * @Author: Ali Ismail
 * @Date:   2018-04-11T13:12:48+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-11T13:12:54+02:00
 */

 const express = require('express')
 const http = require('http')
 const socketIO = require('socket.io')

 // our localhost port
 const port = 4001

 const app = express()

 // our server instance
 const server = http.createServer(app)

 // This creates our socket using the instance of the server
 const io = socketIO(server)

 // This is what the socket.io syntax is like, we will work this later
 io.on('connection', socket => {
   console.log('User connected')

   socket.on('disconnect', () => {
     console.log('user disconnected')
   })
 })

 server.listen(port, () => console.log(`Listening on port ${port}`))
 view rawserver.js hosted with ❤ by GitHub
