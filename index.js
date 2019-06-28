const express = require('express')

const server = express()

server.use(express.json())

const projects = []

const checkIdExist = (req, res, next) => {
  const { id } = req.body

  const project = projects.find(project => project.id === id)

  if (project) {
    return res
      .status(400)
      .json({ error: 'This id already exists. Try another, please!' })
  }

  return next()
}

const checkProjectExist = (req, res, next) => {
  const { id } = req.params

  const project = projects.find(project => project.id === id)

  if (!project) {
    return res.status(400).json({ error: 'Project not found' })
  }

  return next()
}

server.use((req, res, next) => {
  console.count('Request')
  return next()
})

//Store project
server.post('/projects', checkIdExist, (req, res) => {
  const { id, title } = req.body

  const project = { id, title, tasks: [] }

  projects.push(project)

  return res.json(project)
})

//Get all projects
server.get('/projects', (req, res) => {
  return res.json(projects)
})

//Edit project
server.put('/projects/:id', checkProjectExist, (req, res) => {
  const { id } = req.params
  const { title } = req.body

  const project = projects.find(p => p.id === id)

  project.title = title

  return res.json(project)
})

//Delete project
server.delete('/projects/:id', (req, res) => {
  const { id } = req.params

  const projectIndex = projects.findIndex(p => p.id === id)

  projects.splice(projectIndex, 1)

  return res.send('Project deleted successfully!')
})

//Store task to project
server.post('/projects/:id/tasks', checkProjectExist, (req, res) => {
  const { id } = req.params
  const { title } = req.body

  const project = projects.find(project => project.id === id)

  project.tasks.push(title)

  return res.json(project)
})

server.listen(3000)
