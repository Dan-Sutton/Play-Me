import query from "../db/index.js"

export async function getRequests() {
    const data = await query(`SELECT * FROM requests;`);
    return data.rows;
}

export async function getRequestById(id) {
    const data = await query(`SELECT * FROM requests WHERE id = $1;`, [id]);
    return data.rows;
}

export async function addNewRequest(title, artist, user) {
    const data = await query(`INSERT INTO requests (title, artist, username)
    VALUES ($1, $2, $3);`, [title, artist, user]);
    return data.rows;
}

export async function deleteAllRequests() {
    const data = await query(`DELETE * FROM requests;`);
    return data.rows;
}