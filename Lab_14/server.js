const express = require('express')

// define api file from our file to read.
const apiRouters = require('./routes/api')

// Create web application server 
const app = express()

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