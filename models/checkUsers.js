import query from "../db/index.js"

export async function getUsers() {
    const data = await query(`SELECT * FROM appUsers;`);
    return data.rows;
}

export async function getUserByName(username) {
    const data = await query(`SELECT * FROM appUsers WHERE username = $1;`, [username]);
    return data.rows;
}

export async function addNewUser(username, password) {
    const data = await query(`INSERT INTO appUsers (username, password)
    VALUES ($1, $2);`, [username, password]);
    return data.rows;
}

export async function deleteUserById(id) {
    const data = await query(`DELETE FROM appUsers WHERE id = $1`, [id]);
    return data.rows;
}