const express = require('express')
const routes = express.Router()
const { createWorkout, getAllWorkout, getWorkout, deleteWorkout, updateWorkout } = require('../controllers/c_workout')

// GET all workouts
routes.get('/', (req, res) => {
  getAllWorkout(req, res)
})

// GET a single workout
routes.get('/:id', (req, res) => { getWorkout(req, res) })

// POST a a new workout
routes.post('/', (req, res) => { createWorkout(req, res) })

// DELETE a a new workout
routes.delete('/:id', (req, res) => { deleteWorkout(req, res) })

// PATCH a a new workout
routes.patch('/:id', (req, res) => { updateWorkout(req, res) })

module.exports = routes