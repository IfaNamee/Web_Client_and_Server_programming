const express = require('express')

// define api file from our file to read.
const apiRouters = require('./routes/api')

// path file to request to dist
const path = require('path')

// Create web application server 
const app = express()

// define whare files are to deploy 
const staticFilePath = path.join(__dirname, 'client', 'dist')
const staticFiles = express.static(staticFilePath)

app.use('/', staticFiles)  // request to home page, serve static file - the Vue app index.html in dist

app.use(express.json())

app.use('/api', apiRouters)

// this handles if apiRouter can't handles other occer errors
app.use(function(req, res, next) {
    // can't find a matching route
    res.status(404).send('Sorry, not found.')
})

// this handles if apiRouter can't handles other occer errors
app.use(function( err, req, res, next) {
    console.log(err)
    res.status(500).send('Server error')
})

// Start server running
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port ', server.address().port)
})