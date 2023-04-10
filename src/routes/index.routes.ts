import { Router } from "express";
import userRoutes from "./users.routes.js"

const routes = Router()

routes.use([userRoutes])

export default routes