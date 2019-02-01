const ioRoutes = (io) => {
  io.on('connection', socket => {
    socket.emit('news', { hello: 'world' })
    socket.on('my other event', (data) => {
      console.log(data)
    })
  })
}

export default ioRoutes