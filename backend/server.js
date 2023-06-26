const express = require('express')
require('dotenv').config
const workoutRoutes = require('./routes/workout')

// express app
const app = express();

// Port
const PORT = process.env.PORT || 5000

// middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workout', workoutRoutes)

// listen for request
app.listen(PORT, () => {
  console.log(`running on port ${PORT}`)
})