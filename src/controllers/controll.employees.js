const connectDB = require('../db')

const loggin = async (req, res) => {
  try {
    let usr = { ...req.body }
    const connection = await connectDB()
    let [ result ] = await connection.query(`SELECT username, password, email FROM users WHERE username = '${usr.username}' AND password = '${usr.password}'`)
    if (result.length === 0) {
      res.status(404)
      res.send("Invalid User or Password")
      console.log("Invalid User or Password")
    }
    if (result[0].username == 'john') {
      console.log(result[0])
      console.log("Super user")
    }
    //res.send(result[0][0])
    res.json(result[0])
  } catch (error) {
    return res.status(500).json({
      message: "Algo no anda bien"
    })
  }
}

module.exports = loggin