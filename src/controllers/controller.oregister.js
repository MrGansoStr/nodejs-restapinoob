const connectDB = require('../db')

const oregs = async (req, res) => {
  let usr = {...req.body}
  const connection = await connectDB()
  let result = await connection.query(`INSERT INTO users (username, password, email) 
  VALUES ('${usr.username}', '${usr.password}', '${usr.email}')`)
  res.send('Register succesfully')
}

module.exports = oregs