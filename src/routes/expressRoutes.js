import { createGame } from 'controllers/Game/route'


const expressRouter = (app) => {
  app.get('/', (req, res) => {
    res.status(200).send('T H I C C')
  })

  app.post('/create-game', (req, res) => createGame(req, res))
}

export default expressRouter