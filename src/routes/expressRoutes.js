const expressRouter = (app) => {
  app.get('/', (req, res) => {
		res.status(200).send('T H I C C')
	})
}

export default expressRouter