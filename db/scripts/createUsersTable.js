import query from '../index.js';

const sqlString = `CREATE TABLE IF NOT EXISTS appUsers (id SERIAL PRIMARY KEY, username TEXT,
     password TEXT)`;

async function createUsersTable(){
    const res = await query(sqlString);
    console.log("New User Table Made!", res);
}

createUsersTable();