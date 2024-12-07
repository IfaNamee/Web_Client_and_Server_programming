// Import the Express framework
const express = require('express');

// Create a router instance to define application routes
const router = express.Router();

// Route for the home page
router.get('/', function(req, res, next) {
    // Render the 'index' view and pass the title and timeLoaded to the template
    res.render('index', {
        title: 'Body mass index calculator app', // Title displayed in the template
        timeLoaded: new Date() // Passes the current date and time to the view
    });
});

// Route for the BMI form page
router.get('/body-mass-form', function(req, res, next) {
    // Render the 'body_mass_index' view
    res.render('body_mass_index');
});

// Route to handle form submission and BMI calculation
router.post('/calculate-bmi', function (req, res, next) {
    const formData = req.body; // Access submitted form data
    console.log(formData); // Log the form data to the console for debugging

    // Extract height and weight from the form data and convert to numbers
    const height = parseFloat(formData.height);
    const weight = parseFloat(formData.weight);

    // Calculate BMI using the formula: BMI = weight / (height^2)
    const bmi = (weight / (height ** 2));

    // Render the result in the 'your_result' view
    res.render('your_result', {
        height: height, // Pass the height to the view
        weight: weight, // Pass the weight to the view
        bmi: bmi.toFixed(2), // Format BMI to two decimal places and pass to the view
    });
});

// Export the router so it can be used in the main application
module.exports = router;