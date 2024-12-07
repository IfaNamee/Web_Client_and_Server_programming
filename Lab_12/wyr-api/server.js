const express = require('express')

// import index.js from file.
const indexRouter = require('./routes/index')

// make web app server
const app = express()

app.use('/', indexRouter)

const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port', server.address().port)
})