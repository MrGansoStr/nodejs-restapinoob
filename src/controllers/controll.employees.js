const connectDB = require('../db')

const loggin = async (req, res) => {
  try {
    let usr = { ...req.body }
    const connection = await connectDB()
    let [ result ] = await connection.query(`SELECT username, password, email FROM users WHERE username = '${usr.username}' AND password = '${usr.password}'`)
    console.log(result)
    if(result.length == 0) {
      res.status(404)
      res.send("Invalid User or Password")
      res.setHeader()
      console.log("Invalid User or Password")
      return res.json()
    }
    //res.send(result[0][0])
    return res.json(result[0])
  } catch (error) {
    console.log(error)
    return res.status(400).json()
  }
}

module.exports = loggin