import query from '../index.js';

const sqlString = `CREATE TABLE IF NOT EXISTS cats (id SERIAL PRIMARY KEY, name TEXT, human TEXT, hobby TEXT)`;

async function createCatsTable(){
    const res = await query(sqlString);
    console.log("New Table Made!", res);
}

createCatsTable();