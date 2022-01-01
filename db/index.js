import pg from "pg";

const pool = new pg.Pool({
    user: "okivoojshprklv",
    host: "ec2-54-217-232-239.eu-west-1.compute.amazonaws.com",
    database: "da7ujsjbt65fs9",
    password: "4234c851c7bc0f7c4958834829ddd320adcbeb831e0760156ca3f9500707fc70",
    port: "5432",
    ssl: { rejectUnauthorized: false }
  });

export default function query(text, params){
    return pool.query(text, params)
}

