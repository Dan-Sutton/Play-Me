import query from '../index.js';

const sqlString = `CREATE TABLE IF NOT EXISTS requests (id SERIAL PRIMARY KEY, title TEXT,
     artist TEXT, username TEXT)`;

async function createRequestTable(){
    const res = await query(sqlString);
    console.log("New Table Made!", res);
}

createRequestTable();