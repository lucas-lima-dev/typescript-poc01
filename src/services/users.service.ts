import bcrypt from "bcrypt"
import "dotenv/config"
import jwt from "jsonwebtoken"
import userRepository from "../repositories/users.repository.js"
import errors from "../errors/index.js"
import {CreateUser, UserEntity,ListAllUsers} from "../protocols.js"
import { QueryResult } from "pg"


async function createUser( { name, email, password}: CreateUser): Promise<QueryResult<UserEntity>> {
  const { rowCount } = await userRepository.findUserByEmail(email);
  if (rowCount) throw errors.duplicatedEmailError(email);

  const hashPassword = await bcrypt.hash(password, 10);

  return userRepository.createUser({ name, email, password: hashPassword})
}

async function listAllUsers():Promise<ListAllUsers> {
    const { rows, rowCount } = await userRepository.listAllUsers()

    if(!rowCount) throw errors.notFoundError()

    return rows
}

async function updateUser({id,name,email,password}:UserEntity) {
    await userRepository.updateUser({id,name, email, password})
}

async function deleteUser({id}: number) {
    await userRepository.deleteUser(id)
}

const userService =  {
    createUser,
    listAllUsers,
    updateUser,
    deleteUser
}

export default userService