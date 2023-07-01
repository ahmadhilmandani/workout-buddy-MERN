const express = require('express')
const workoutModel = require('../models/m_workout')

const routes = express.Router()

// GET all workouts
routes.get('/', (req, res) => {
  res.json({ msg: 'GET all workouts' })
})

// GET a single workout
routes.get('/:id', (req, res) => {
  res.json({ msg: 'GET single workout' })
})

// POST a a new workout
routes.post('/', async (req, res) => {
  const { title, reps, load } = req.body
  try {
    const workout = await workoutModel.create({ title, reps, load })
    res.status(200)
    res.json(workout)
  } catch (error) {
    res.status(400)
    res.json({ error: error.message })
  }
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