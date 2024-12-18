// import 
import { defineStore } from "pinia" 
import { ref, computed} from 'vue'

// This after database created
// Import the 'mande' library for making API calls
import {mande} from 'mande'
// Create an API client for the 'api/students' from file
const studentAPI = mande('api/students')

export const useStudentStore = defineStore('students', () => {

    // list students
    // State: A reactive reference for storing a list of students
    const sortedStudent = ref([])

    // check recent student
    const mostRecentStudent = ref( {})  // empty object

    // this for if client enter some data in database.
    const addNewStudentErrors = ref([])

    // this add after database crated
    // Function: Fetch all students from the API and update the state
    function getAllStudent() {
        // make an API request to get all student and store - studentList
        studentAPI.get().then( students => {  // students is the JSON response from the API
            sortedStudent.value = students
        }).catch(err => {
            console.log(err)
        })
    }

    // function to add new student to studentList.
    function addNewStudent(student) {
        // make api call to add new student
        // call getAllStudents to re-request list of students from API server
        studentAPI.post(student).then( () => {
            getAllStudent()
        }).catch( err => {  // this catch error if for if client enter some starID in database
            addNewStudentErrors.value = err.body
        })
    }

    // function to delete student from studentList.
    function deleteStudent(studentToDelete) {
        // request student id from /api/students/ to delete from database
        const deleteStudentAPI = mande(`/api/students/${studentToDelete.id}`)
        deleteStudentAPI.delete().then( () => {
            mostRecentStudent.value = {}
            getAllStudent()
        }).catch(err => {
            console.log(err)
        })
    }

    // function to check when student arrived and left.
    function arrivedOrLeft(student) {
        // request student id from /api/students/ to updated database
        const editStudentAPI = mande(`/api/students/${student.id}`)
        editStudentAPI.patch(student).then( () => {
            mostRecentStudent.value = student
            getAllStudent()
        }).catch(err => {
            console.log(err)
        })
    }

    // computed properties to count students.
    const studentCount = computed( () => {
        return sortedStudent.value.length
    })

    return{
        // reactive data
        mostRecentStudent,
        sortedStudent,
        addNewStudentErrors,

        // functions
        getAllStudent,
        addNewStudent,
        deleteStudent,
        arrivedOrLeft,

        // computed properties
        studentCount
    }

})