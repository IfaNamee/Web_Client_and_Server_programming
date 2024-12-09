// Import the Express framework to create the server
const express = require('express')

// Import the 'path' module to work with file and directory paths
const path = require('path')

// import index.js from file.
const indexRouter = require('./routes/index')

// create web app server on express
const app = express()

// combines directory names into a single path
const staticFilePath = path.join(__dirname, 'client', 'dist')

// `express.static` serves files (e.g., HTML, CSS, JS) from the 'dist' file
const staticFiles = express.static(staticFilePath)

// Mount the static file on the root URL
app.use('/', staticFiles)

// Use the router for handling additional routes
app.use('/', indexRouter)

// Start the server and run.
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port', server.address().port)
})