import pg from "pg";

const pool = new pg.Pool({
  user: "wsdstjjrkxynlf",
  host: "ec2-54-216-159-235.eu-west-1.compute.amazonaws.com",
  database: "d640b7lo4vaj7m",
  password: "c585ceb272af2a00798b911c827e5b992820789386ff4257180fc03aec7c9ef9",
  port: "5432",
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
  return pool.query(text, params);
}
