const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

const port = 5000 || process.env.PORT
app.listen((port)=>{
    `Server running on port ${port}`
})