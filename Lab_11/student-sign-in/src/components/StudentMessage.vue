<script setup>

// Import the `useStudentStore` function from the StudentStore file.
// Used to access the Pinia store that manages student-related state.
import { useStudentStore } from '../stores/StudentStore'

// Import the `storeToRefs` from Pinia.
// Extract reactive state and getters from the store.
import { storeToRefs } from 'pinia'

// Create a reference to the Student store and access to the store.
const studentStore = useStudentStore()

// Reactive and easier to work with in the template and display.
const { mostRecentStudent } = storeToRefs(studentStore)

</script>

<template>
    
    <div id="welcome-or-goodbye-message" class="m-2">
            
        <!-- TODO show a message when student arrives or leaves  -->
        <div v-if="mostRecentStudent.name">
            
            <div v-if="mostRecentStudent.present" class="alert alert-success">
                Welcome, {{mostRecentStudent.name}}!
            </div>

            <div v-else class="alert alert-info">
                Goodbye {{mostRecentStudent.name}}, see you later.
            </div>
        </div>
            
    </div> 

</template>


<style scoped>

/* CSS for this component */

</style>