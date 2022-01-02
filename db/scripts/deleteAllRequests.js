import query from '../index.js';

const sqlString = `DELETE FROM requests`;

async function deleteAllRequests(){
    const res = await query(sqlString);
    console.log("All Requests Deleted!", res);
}

deleteAllRequests();