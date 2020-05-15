const express = require('express')

// const projectRouter = require('./projects/projectRouter')

const server = express()

server.use(express.json())

// server.use('/api/projects', projectRouter)
//server.use('/api/resources', resourceRouter)
// server.use('/api/tasks', taskRouter)

server.get('/', (req, res) => {
    res.send(`What's cookin' good lookin'?`)
})
module.exports = server