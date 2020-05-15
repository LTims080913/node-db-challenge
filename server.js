const express = require('express')

const ProjectRouter = require('./projects/projectRouter')
const TaskRouter = require('./tasks/taskRouter')
const ResourceRouter = require('./resources/resourceRouter')

const server = express()

server.use(express.json())

server.use('/api/projects', ProjectRouter)
server.use('/api/resources', ResourceRouter)
server.use('/api/tasks', TaskRouter)

server.get('/', (req, res) => {
    res.send(`What's cookin' good lookin'?`)
})


module.exports = server