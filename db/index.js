import pg from "pg";

const pool = new pg.Pool({
    user: "gqhmovcdplgssz",
    host: "ec2-52-208-221-89.eu-west-1.compute.amazonaws.com",
    database: "d5fh1urss5hlkb",
    password: "4bbe8910bd49ed433832dd6aa26e2118d70b0de6ec9d10dce5962e4f30731617",
    port: "5432",
    ssl: { rejectUnauthorized: false }
  });

export default function query(text, params){
    return pool.query(text, params)
}

