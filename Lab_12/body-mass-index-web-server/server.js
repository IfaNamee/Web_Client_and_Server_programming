// Import the Express framework for building web applications
const express = require('express')

// Import the 'path' module for working with file and directorys
const path = require('path')

// Import the 'body-parser' request bodies
const bodyParser = require('body-parser')

// Import the index router from the 'routes/index' file
const indexRouter = require('./routes/index')

const app = express()  // Create the web app server

// Enable parsing of POST request body 
app.use(bodyParser.urlencoded({ extended: false}))

// static files like CSS, JS, images from the specified location
const fileLocStyle = path.join(__dirname, 'design')

// tell app to use from the specified location
app.use(express.static(fileLocStyle))

// tell app where the views (HTML files or templates) are
app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'hbs')  // use handlebars to generate views

app.use('/', indexRouter)   // all requests to the app will be passed to indexRouter

// start server running
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port)
})