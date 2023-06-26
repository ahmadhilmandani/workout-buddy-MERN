const express = require('express')

const routes = express.Router()

// get all workouts
routes.get('/', (req, res) => {
  res.json({ msg: 'GET all workouts' })
})

// GET a single workout
routes.get('/:id', (req, res) => {
  res.json({ msg: 'GET single workout' })
})

// POST a a new workout
routes.post('/', (req, res) => {
  res.json({ msg: 'POST a new workout' })
})

// DELETE a a new workout
routes.delete('/:id', (req, res) => {
  res.json({ msg: 'DELETE a workout' })
})

// PATCH a a new workout
routes.patch('/:id', (req, res) => {
  res.json({ msg: 'UPDATE a workout' })
})


module.exports = routes