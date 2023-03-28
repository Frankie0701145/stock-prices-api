const mysql = require('mysql2');
const config = require('../config');

async function query(sql, params) {
    // const connection = await mysql.createConnection(config.db);
    const pool = mysql.createPool(config.db);
    const promisePool = pool.promise();
    const [results, ] = await promisePool.query(sql, params);
  
    return results;
}

module.exports = {
    query
}