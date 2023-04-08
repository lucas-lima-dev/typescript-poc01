import db from "../configs/database.js"

async function createUser({name,email,password}){
    await db.query(
    `
    INSERT INTO users (name, email, password)
    VALUES ($1,$2,$3)
    `,
    [name,email,password])
}

async function listAllUsers() {
    return await db.query(
    `
    SELECT * FROM users 
    `)

}

async function findUserByEmail({email}) {
    return await db.query(
    `
    SELECT * FROM users WHERE email = $1
    `,
    [email])

}

async function findUserById({id}) {
    return await db.query(
    `
    SELECT * FROM users WHERE id = $1
    `,
    [id]);

}

async function updateUser({name,email,password,id}) {
      await db.query(
        `
            UPDATE users 
            SET name=$1, email=$2,password=$3
            WHERE id=$4;`,
        [name, email, password, id]
      );
}

async function deleteUser({id}) {
    await db.query(
    `
    DELETE FROM users
    WHERE id=$1
    `,
    [id]
    );
}

const userRepository = {
    createUser,
    listAllUsers,
    findUserByEmail,
    findUserById,
    updateUser,
    deleteUser
}

export default userRepository