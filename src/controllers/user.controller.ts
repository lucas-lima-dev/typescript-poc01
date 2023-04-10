import { Request,Response,NextFunction } from "express";
import httpStatus from "http-status";
import userService from "../services/users.service.js"
import {CreateUser} from "../protocols.js"

async function createUser( req: Request, res:Response, next: NextFunction) {
    const { name, email, password } = req.body as CreateUser

    try {
        await userService.createUser({ name, email, password })
        return res.sendStatus(httpStatus.CREATED)
    } catch (error) {
        next(error)
    }

}
async function listAllUsers( req: Request, res:Response, next: NextFunction) {
    try {
        const users = await userService.listAllUsers()
        return res.send({users})
    } catch (error) {
        next(error)
    }
}
async function updateUser( req: Request, res:Response, next: NextFunction) {
    const { id } = res.locals.user;

    try {
        await userService.updateUser({id})
        res.sendStatus(httpStatus.OK)
    } catch (error) {
        next(error)
    }
}
async function deleteUser( req: Request, res:Response, next: NextFunction) {
    const { id } = res.locals.user;

    try {
        await userService.deleteUser({id})
        res.sendStatus(httpStatus.OK)
    } catch (error) {
        next(error)
    }
}

const userController =  {
    createUser,
    listAllUsers,
    updateUser,
    deleteUser
}

export default userController