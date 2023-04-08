import { Request,Response,NextFunction } from "express";

async function createUser( req: Request, res:Response, next: NextFunction) {
    const { name, email, password } = req.body

}
async function listAllUsers( req: Request, res:Response, next: NextFunction) {}
async function updateUser( req: Request, res:Response, next: NextFunction) {}
async function deleteUser( req: Request, res:Response, next: NextFunction) {}

const userController =  {
    createUser,
    listAllUsers,
    updateUser,
    deleteUser
}

export default userController