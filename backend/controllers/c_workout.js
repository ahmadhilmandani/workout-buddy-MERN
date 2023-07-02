const workoutModel = require('../models/m_workout')
const mongoose = require("mongoose")


// get All data
const getAllWorkout = async (req, res) => {
  const workouts = await workoutModel.find({}).sort({ createdAt: -1 })
  res.status(200).json(workouts)
}


// get single data (workout)
const getWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not Found!" })
  }
  const workout = await workoutModel.findById(id)
  if (!workout) {
    return res.status(404).json({ error: "Not Found!" })
  }
  res.status(200).json(workout)
}


// create or insert data 
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body

  try {
    const workout = await workoutModel.create({ title, reps, load })
    res.status(200)
    res.json(workout)
  } catch (error) {
    res.status(400)
    res.json({ error: error.message })
  }
}


// delete data
const deleteWorkout = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "Not Found!" })
  }
  const deleted = await workoutModel.findByIdAndDelete({ _id: id })
  if (!deleted) {
    return res.status(404).json({ err: "Not Found!" })
  }
  res.status(200).json({ msg: "data deleted" })
}


// updated data
const updateWorkout = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "Not Found!" })
  }
  const updated = await workoutModel.findByIdAndUpdate({ _id: id }, {
    ...req.body
  })
  if (!updated) {
    return res.status(404).json({ err: "Not Found!" })
  }
  res.status(200).json({ msg: `${id} is sucessfully updated` })
}


module.exports = { createWorkout, getAllWorkout, getWorkout, deleteWorkout, updateWorkout }