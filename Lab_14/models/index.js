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

const config = configJson[env]  // read the configuration objectfor 'development' or 'production'

// set SQL onject
const sequelize = new Sequelize(config)

const database = {
    sequelize: sequelize,
    Sequelize: Sequelize
}

const studentModel = createStudentModel(sequelize, DataTypes)

const studentModelName = studentModel.name  // 'Student'
database[studentModelName] = studentModel

module.exports = database