// lib/db.js
import mysql from 'serverless-mysql';

const db = mysql({
  config: {
    host: 'db-social.cd4wcwmu0tot.us-east-1.rds.amazonaws.com',
    port: '3306',
    database: 'socialdb',
    user: 'admin',
    password: 'sparkycoders',
  },
});

export default async function excuteQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    console.log(results);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}
