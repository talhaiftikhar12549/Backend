import dotenv from 'dotenv'
import express from 'express'
import connectDB from './db/index.js'

dotenv.config({
  path: '../.env'
})

const app = express()
const port = process.env.PORT

connectDB()


console.log(port)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})