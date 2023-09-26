const express = require("express")
const router = require("./router")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

app.listen(PORT, async () => {
  console.log(`server listening on ${PORT}`)
})

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to Mongo")
}).catch((err) => {
  console.log("Error Agaya hai bhai", err)
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(router)




