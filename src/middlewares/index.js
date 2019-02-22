import mandatory from './mandatory.js'
import error from './error.js'

const preSetupMiddleware = (app) => {
  mandatory(app)
}

const postSetupMiddleware = (app) => {
  app.use(error)
}

export default { preSetupMiddleware, postSetupMiddleware }