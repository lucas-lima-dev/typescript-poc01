import { Router } from "express";
import userController from "../controllers/user.controller.js"

const userRoutes = Router()

userRoutes
        .get('/users',userController.listAllUsers)
        .post('/sign-up',userController.createUser)
        .put('/users/:id',userController.updateUser)
        .delete('/users/:id',userController.deleteUser)

export default userRoutes