<script setup>

// Import the `useStudentStore` function from the StudentStore file.
// Used to access the Pinia store that manages student-related state.
import { useStudentStore } from '../stores/StudentStore.js'

// Import the `storeToRefs` from Pinia.
// Extract reactive state and getters from the store.
import { storeToRefs } from 'pinia';

// Import computed from vue
import { computed } from 'vue'

// Import student row from vue 
import StudentRow from './StudentRow.vue'

// Create a reference to the Student store and access to the store.
const studentStore = useStudentStore()

// Reactive and easier to work with in the template and display.
const {studentList, studentCount, sortedStudent} = storeToRefs(studentStore)

// Create a reference to delete student from studentStore file.
const deleteStudent = (student) => {
    studentStore.deleteStudent(student)
}

// Create a reference to get who is arrive or left from studentStore file.
// and their current presence status from arrivedOrLeft
const arrivedOrLeft = (student, isStudentPresent) => {
    student.present = isStudentPresent
    studentStore.arrivedOrLeft(student)
}

// Create computed to display message as plural.
const pluralMessage = computed( () => {
    if (studentCount.value === 1) {
        return 'There is 1 student in class.'
    } else {
        return `There are ${studentCount.value} students in class.`
    }
})

</script>

<template>
    
    <div id="student-list-table" class="card m-2 p-2">
        <h4 class="card-title">Student List</h4>
        <h5 class="card-subtitle text-muted">{{ pluralMessage }}</h5>
        <div id="student-table">
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>StarID</th>
                        <th>Present?</th>
                        <th>Delete?</th>
                    </tr>
                </thead>

                <tbody>
                    <!-- TODO create table rows 
                    Each row will have a checkbox, bound to the app's data 
                    When the checkbox is checked/unchecked, 
                    the student will be signed in/out -->

                    <!--Student row object-->
                    <StudentRow 
                        v-for="student in sortedStudent"
                        v-bind:student="student"
                        v-on:arrived-or-left="arrivedOrLeft"
                        v-on:delete-student="deleteStudent"
                    ></StudentRow>

                </tbody>

            </table>
        </div>
    </div>

</template>


<style scoped>

/* CSS for this component */
#student-table {
    max-height: 400px;
    overflow: scroll;
}

th, tr {
    width: 25%;
    text-align: center;
}

</style>