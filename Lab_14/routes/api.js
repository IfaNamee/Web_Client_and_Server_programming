const express = require('express')

const database = require('../models/index') // will require the index.js file from directory

const Student = database.Student // the student model

const router = express.Router()

// Retrieve all students using GET /students to response.
router.get('/students', function(req, res, next) {
    // query database, get all rows from DB, 
    // convert to JSON from available in the function
    // {order: ['name'] } is sort data in databases by name
    Student.findAll( { order: ['name'] } ).then(students => {
        return res.json(students)
    })
})

// Create a new student using POST /students request, response and next
router.post('/students', function(req, res, next) {
    const newStudent = req.body
    console.log(newStudent)
    Student.create(newStudent).then( result => {
        return res.status(201).send('New student created!')
    }).catch( err => {
        // 400 = bad request - client is sending a request that server can't fulfill
        if (err instanceof database.Sequelize.ValidationError) {
            const messages = err.errors.map( e => e.message)
            return res.status(400).json(messages)
        } else {
            // some other errors
            next(err)
        }
    })
})

// Update an existing student using PATCH /students/:id request, response and next
router.patch('/students/:id', function(req, res, next) {
    // matches requests to /students/1, /students/2, ....
    // req.params stores the id value stores and placeholders in the URL
    const studentID = req.params.id
    const updatedStudent = req.body // updated data about this student
    console.log(updatedStudent)
    Student.update(updatedStudent, { where: {id: studentID}}). then( (result) => {
        const rowsModefied = result[0]
        // if 1 rows was changed, we found the student and they were updated
        if (rowsModefied === 1) {
            return res.send('OK')
        } else {
            // if 0 rows were updated, student was no found
            return res.status(404).send('Student not found')
        }
        
    // what kinds of errors could we see?
    }).catch( err => {  // database error - can't connect or database reports error
        // invalid data in the updatedStudent - eg. no name
        // 400 = bad request - client is sending a request that server can't fulfill
        if (err instanceof database.Sequelize.ValidationError) {
            const messages = err.errors.map( e => e.message)
            return res.status(400).json(messages)
        } else {
            // some other errors -  can't connect to db
            next(err)
        }
    })
})

// Delete a student using DELETE /students/:id request, response and next
router.delete('/students/:id', function(req, res, next) {
    // delete request to /api/students/4 will delete student with id 4
    const studentID = req.params.id
    Student.destroy( { where: {id: studentID} } ).then( (rowsDeleted) => {
        if (rowsDeleted === 1) {   // Successful deletion, respond with confirmation
            return res.send('Student delete')
        } else {  // if rows no delected in the database 
            return res.status(404).send('Student not found')
        }
        
    }).catch(err => { // Handle unexpected errors (e.g., database connection issues)
        return next(err)
    })
})

module.exports = router
