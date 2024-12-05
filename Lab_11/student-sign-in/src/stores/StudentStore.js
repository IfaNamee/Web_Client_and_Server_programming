// import 
import { defineStore } from "pinia" 
import { ref, computed} from 'vue'

export const useStudentStore = defineStore('students', () => {

    // list students
    const studentList = ref([
        {name: 'A.Student', starID: 'aa1234aa', present: false},
        {name: 'B.Student', starID: 'bb1234bb', present: false},
    ])

    // check recent student
    const mostRecentStudent = ref( {})  // empty object

    // function to add new student to studentList.
    function addNewStudent(student) {
        studentList.value.push(student)
    }

    // function to delete student from studentList.
    function deleteStudent(studentToDelete) {
        studentList.value = studentList.value.filter( (student) => {
            return studentToDelete != student
        })

        mostRecentStudent.value = {} // reset most recent message
    }

    // function to check when student arrived and left.
    function arrivedOrLeft(student) {
        mostRecentStudent.value = student
    }

    // computed properties to count students.
    const studentCount = computed( () => {
        return studentList.value.length
    })

    const sortedStudent = computed( () => {
        return studentList.value.toSorted( (s1, s2) => {
            return s1.name.localeCompare(s2.name)
        })
    })

    return{
        // reactive data
        studentList,
        mostRecentStudent,

        // functions
        addNewStudent,
        deleteStudent,
        arrivedOrLeft,

        // computed properties
        studentCount,
        sortedStudent
    }

})