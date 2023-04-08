import Joi from "joi";
import { CreateUser } from '../protocols.js' 

export const createUserSchema = Joi.object <CreateUser>({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required()
})