import { QueryResult } from "pg";
import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
   const insertquery = `INSERT INTO users (username, password, name) VALUES ($1, $2, $3) RETURNING *;`;
   const response:QueryResult = await client.query(insertquery, [username, password, name])
   return response.rows[0];
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const query = `SELECT * FROM users WHERE id = $1`;
    const values = [userId]
    const result:QueryResult = await client.query(query,values);
    console.log(result.rows[0])
    return result.rows[0]
}


