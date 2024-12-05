<script setup>
// Import vue
import { ref } from 'vue'

// Import the `useStudentStore` function from the StudentStore file.
// Used to access the Pinia store that manages student-related state.
import { useStudentStore } from '../stores/StudentStore'

// Create a reference to the Student store and access to the store.
const studentStore = useStudentStore()

// variable to input name and starID 
const newStudentName = ref('')
const newStarID = ref('')

// Variable to store errors
const formErrors = ref([])

// function to add students
const addStudent = () => {

        formErrors.value = [] // reset form errors

        // check if newStudentName is Invalid
        if (newStudentName.value.length == 0) {
            formErrors.value.push('Student name must be entered')
        }

        // check if starID is Invalid
        if (newStarID.value.length == 0) {
            formErrors.value.push('StarID must be entered')
        }

        // if there are no errors - is the form valid
        if (formErrors.value.length == 0) {
            let student = {
                name: newStudentName.value,
                starID: newStarID.value,
                present: false
            }

            // add new student to studentStore
            studentStore.addNewStudent(student)
             
            newStudentName.value = ''
            newStarID.value = ''
        }

}

</script>

<template>

    <!-- Underline warning sign occurs because Vue 3 enforces that 
        the template root must have exactly one root element. so i added one main <div></div> -->
    <div>
    
        <div id="new-student-form-errors" class="m-2">
            <!-- TODO show errors from form validation -->
             <div v-if="formErrors.length > 0" class="alert alert-danger">
                <li v-for="error in formErrors" v-bind:key="error">
                    {{ error}}
                </li>
             </div>
             
        </div>

        <div id="new-student-form" class="card add-student m-2 p-2">
            <h4 class="card-title">Add new student</h4>

            <div class="form-group mb-3">
                <label for="name">Name</label>
                <!-- TODO v-model newStudentName -->
                <input v-model.trim="newStudentName" id="name" class="form-control">
            </div>

            <div class="form-group mb-3">
                <label for="starID">Star ID</label>
                 <!-- TODO v-model newStarID -->
                <input v-model.trim="newStarID" id="starID" class="form-control">
            </div>

            <!-- TODO v-on:click event handler -->
            <button v-on:click="addStudent" class="btn btn-primary">Add</button>
            
        </div>

    </div>

</template>


<style scoped>

/* CSS for this component */

</style>