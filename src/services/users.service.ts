import bcrypt from "bcrypt"
import "dotenv/config"
import jwt from "jsonwebtoken"


async function createUser( { name, email, password }) {}
async function listAllUsers( ) {}
async function updateUser( ) {}
async function deleteUser( ) {}

const userService =  {
    createUser,
    listAllUsers,
    updateUser,
    deleteUser
}

export default userService