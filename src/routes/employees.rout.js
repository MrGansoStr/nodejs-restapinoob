const Router = require('express')
const route = Router()

route.get('/update', (req, res) => {
  res.send("Actualizando....")
})


module.exports = route