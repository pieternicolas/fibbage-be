import 'babel-polyfill'
import express from 'express'
import http from 'http'
import socketIO from 'socket.io'

import middlewares from './middlewares'
import routes from './routes'

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

middlewares.preSetupMiddleware(app)
routes(app, io)
middlewares.postSetupMiddleware(app)

server.listen(4200, () => {
  console.log('starting boz')
})