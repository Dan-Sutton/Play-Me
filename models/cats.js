import query from "../db/index.js"

export async function getCats() {
    const data = await query(`SELECT * FROM cats;`);
    return data.rows;
}

export async function getCatById(id) {
    const data = await query(`SELECT * FROM cats WHERE id = $1;`, [id]);
    return data.rows;
}

export async function addNewCat(catName, humanName, hobby) {
    const data = await query(`INSERT INTO cats (name, human, hobby)
    VALUES ($1, $2, $3);`, [catName, humanName, hobby]);
    return data.rows;
}