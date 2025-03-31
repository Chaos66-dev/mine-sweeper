import express from 'express'
const server = express()
import cors from 'cors'


server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
        res.status(200).json({message: "I am working even better"})
    }
)

export default server