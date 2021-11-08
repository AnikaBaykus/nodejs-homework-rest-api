require('dotenv').config()
const app = require('../app')
const mongoose = require('mongoose')

const { DB_HOST, PORT = 3000 } = process.env

mongoose.connect(DB_HOST, {
  useNewUrlParser: true,
  // useCreateIndex: true, Опция устарела
  useUnifiedTopology: true,
}).then(() => {
  app.listen(PORT, () => {
    console.log(`Database connection successful! PORT = ${PORT}`)
  })
}).catch(error => {
  console.log('error', error.message)
  process.exit(1)
})
