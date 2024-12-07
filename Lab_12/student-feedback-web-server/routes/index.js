const express = require('express')
const router = express.Router()  // figure out what code to run in response to a request
// typically based on the URL, and the method, get, POST,...

// responds to get request to home page
router.get('/', function( req, res, next) {  // request, response, next
    // name of handlebars file - name of a template, optional object with data for the template
    res.render('index', {
        title: 'Feedback Application',
        author: 'Ifa',
        timePageLoaded: new Date()
    })
})  // get request to the home page

router.get('/feedback-form', function(req, res, next) {
    res.render('student_feedback_form')
})

router.post('/submit-feedback', function(req, res, next) {
    // access form data
    // const formData = req.query // for a GET request - read the URL

    const formData = req.body   // for a POST request 
    console.log(formData)

    // todo - save to a database
    // automatically email someone when feedback was submitted.

    res.render('thank_you', {
        name: formData.name,
        email: formData.email,
        comments: formData.comments,
        currentStudent: formData['current-student']
    })

})

module.exports = router  // this line needs to be the very last line
