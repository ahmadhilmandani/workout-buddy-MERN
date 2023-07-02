const express = require('express')
require('dotenv').config();
const workoutRoutes = require('./routes/workout')
const mongoose = require('mongoose')

// express app
const app = express();

// Port
const PORT = process.env.PORT || 5000

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
app.use(express.json())

// routes
app.use('/api/workout', workoutRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for request after connected to DB
    app.listen(PORT, () => {
      console.log(`connected to DB & running on port ${PORT}`)
    })
  }).catch((error) => {
    console.log(error)
  })