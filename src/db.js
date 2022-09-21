const mysql = require('mysql2/promise')

async function connectDB() {
  const connection = await mysql.createConnection({
    host:'us-east.connect.psdb.cloud',
    user:'hlp6j3ysz125umfhxrcn',
    password:'pscale_pw_Vto5JspPAsypDzzpG89pzvZ8z8HQtKuMYSJIwlHeLB3',
    database:'db_test_celenpays',
    ssl: {
      rejectUnauthorized: false
    }
  })
  return connection
}

module.exports = connectDB