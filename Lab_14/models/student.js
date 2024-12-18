
module.exports = (sequelize, DataTypes) => {
    // define the model
    const Student = sequelize.define('Student', {
        // define the columns in the database - give a names, and a types
        name: {
            type: DataTypes.STRING,  
            allowNull: false,  // valid if without name is enter.
            validate: {
                notEmpty: false  // valid if STRING name is empty like "name": "" .
            }
        },
        starID: {
            type: DataTypes.STRING,
            allowNull: false,   //  valid if without starID add or enter. 
            unique: true,    // valid if starID is unique
            validate: {
                notEmpty: false  // valid if STRING starID is empty like "starID": "" .
            }
            
        },
        present: {
            type: DataTypes.BOOLEAN,
            allowNull: false,   //  valid if present is empty.
            default: false  // set present default false
        }
    })

    // sync means create or update a table in the datebase.
    // force: true means always update when app is run or save.
    // force: false means not update unless you update not when app run.
    Student.sync( { force: false} ).then( () => {
        console.log("Synced Student table")
    })

    return Student
}