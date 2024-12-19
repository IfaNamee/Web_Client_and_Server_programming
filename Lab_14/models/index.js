const { Sequelize, DataTypes} = require('sequelize')

// define config.json from our file. 
const configJson = require('../config.json')

// define student.js from our file to read student table
const createStudentModel = require('./student.js')

// look for an enviroment variable will be called NODE_ENV and read it's value 
// environment variable are set for your whole computer (or for a server)
// any application running on this computer (or server) can read these environment variable
// at Azure, we'll create an environment varible for server called NODE_ENV set it to "production"
// if there is not NODE_ENV set, like on your computer, we'll use the value 'development'
const env = process.env.NODE_ENV || 'development'

// Retrieve the database password from environment variables for better security
const dbPassword = process.env.DB_PASSWORD

const config = configJson[env]  // read the configuration objectfor 'development' or 'production'

// Assign the retrieved password to the configuration object
config.password = dbPassword

// set SQL onject
// Initialize Sequelize with the provided configuration
const sequelize = new Sequelize(config)

// Create a database object to store Sequelize instances and models
const database = {
    sequelize: sequelize,  // The Sequelize instance for database operations
    Sequelize: Sequelize   // The Sequelize library for defining models
}

// Create the Student model using the Sequelize instance and data types
const studentModel = createStudentModel(sequelize, DataTypes)

// Dynamically add the model to the database object using its name
const studentModelName = studentModel.name  // 'Student'
database[studentModelName] = studentModel

// Export the database object for use in other parts of the application
module.exports = database