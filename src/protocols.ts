
export type UserEntity = {
    id: number,
    name: string,
    email:string,
    password:string
}

export type CreateUser = Omit< UserEntity, "id" | "name" >

export type ApplicationError = {
    name: string,
    message: string
}

export type EmailNotAvailableError = {
    email:string
} & ApplicationError