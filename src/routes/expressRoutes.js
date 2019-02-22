const expressRouter = (app) => {
  app.get('/', (req, res) => {
    res.status(200).send('T H I C C')
  })

  app.post('/create-game', (req, res) => {
    res.status(200).json(req.body)
  })
}

export default expressRouter