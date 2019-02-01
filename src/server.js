import 'babel-polyfill'
import express from 'express'
import http from 'http'
import socketIO from 'socket.io'

import middlewares from './middlewares';

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

middlewares.preSetupMiddleware(app)

app.get('/', (req, res, next) => {  
  res.send('adsfadsf')
})

io.on('connection', socket => {
  socket.emit('news', { hello: 'world' })
  socket.on('my other event', (data) => {
    console.log(data)
  })
})

middlewares.postSetupMiddleware(app)

server.listen(4200, () => {
  console.log('starting boz')
})