const mysql = require('mysql2/promise')

async function connectDB() {
  const connection = await mysql.createConnection({
    host:'us-east.connect.psdb.cloud',
    user:'mnvnkiuxspiwkrdl6fs3',
    password:'pscale_pw_pb5ca4a0QdYwREo6EJyRX6V6SFk4m4THu3DUmLPlMAA',
    database:'db_test_celenpays',
    ssl: {
      rejectUnauthorized: false
    }
  })
  return connection
}

module.exports = connectDB