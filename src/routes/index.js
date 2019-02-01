import ioRoutes from './ioRoutes'
import expressRoutes from './expressRoutes'

const router = (app, io) => {
  expressRoutes(app)
  ioRoutes(io)
}

export default router