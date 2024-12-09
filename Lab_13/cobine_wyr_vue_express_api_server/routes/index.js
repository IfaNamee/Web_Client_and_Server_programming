// Import Express.js
const express = require('express')

// Create a new router instance
const router = express.Router()

// Import the randomWYRQuestion function from the 'model/wyr_question' model file
const randomWYRQuestion = require('../model/wyr_question')

// Route for the home page
router.get('/', function (req, res, next) {
    // Sends a placeholder message along with a link to wyr questions.
    res.send('<h1>Placeholder for home page. <br> Visit <a href="http://localhost:3000/wyr">this link</a> for more API request questions.</h1>');
});


// Route for getting a random "wyr" question run on http://localhost:3000/
router.get('/wyr', function(req, res, next) {
    //    const wyr = {
    //        'question': 'Live in a circle house or a triangle house',
    //        'answer1': 'Circle house',
    //        'answer2': 'Triangle house'
    //    }

    // Instead of the static response, we call the randomWYRQuestion function 
    // to get a random question.
    const wyr = randomWYRQuestion()

    // Send the question as a JSON response
    res.json(wyr)

})

// Export the router for use in other application
module.exports = router