import userService from "services/users.service"

export type UserEntity = {
    id: number,
    name: string,
    email:string,
    password:string
}

export type CreateUser = Omit< UserEntity, "id"  >
export type ListAllUsers = Omit< UserEntity, "id" | "email" | "password"  >
export type FindUserByEmail = Omit< UserEntity, "id" | "email" | "password"  >

pesquiser sobre array de users
export type ApplicationError = {
    name: string,
    message: string
}

export type EmailNotAvailableError = {
    email:string
} & ApplicationError