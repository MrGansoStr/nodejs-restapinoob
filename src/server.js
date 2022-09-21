const updateroute = require('./routes/employees.rout.js')
const express = require('express')
const morgan = require('morgan')
const connectDB =  require('./db.js')

const loggin = require('./controllers/controll.employees.js')
const configs = require('./config')
console.log(configs.port)

//connectDB()

const app = express()
app.use(morgan('dev'))
app.use(express.json())

let thing = [
  {
    id: 1,
    name: "cosa1",
    price: 4000
  }
]

app.get('/cosas', async (req, res) => {
  const connection = await connectDB()
  const [ result ] = await connection.query('SELECT * FROM users')
  //const res1 = JSON.parse(result[0][0])
  //console.log(res1)
  res.json(result)
  console.log(result.length)
})

app.post('/cosas', (req, res) => {
  console.log(req.body)
  thing.push({...req.body, id: thing.length + 1})
  res.send('Algo en post')
})

app.post('/register', async (req, body) => {
  const connection = await connectDB()
})

app.post('/oauth', loggin)


app.post('/oregister', async (req, res) => {
  let usr = {...req.body}
  const connection = await connectDB()
  let result = await connection.query(`INSERT INTO users (username, password, email) 
  VALUES ('${usr.username}', '${usr.password}', '${usr.email}')`)
  res.send('Register succesfully')
})
app.use(updateroute)

app.use((req, res, next) => {
  res.status(404).json({
    message: "No encontrado"
  })
})

app.listen(configs.port)

console.log(`Escuchando en el puerto ${configs.port}`)
console.log()
