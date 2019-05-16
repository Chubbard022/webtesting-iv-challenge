const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const hobbitRouter = require("../router/hobbitRouter")

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())
server.use("/api/hobbits",hobbitRouter)

server.get("/",(req,res)=>{
    res.status(200).json({api: "up"})
})

module.exports = server;