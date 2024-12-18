<script setup>

// Importing ref for creating reactive state
import { ref } from 'vue'

// Defining props to receive the student object from the parent component
const props = defineProps({
    student: Object
})

// Defining an event emitter for notifying the parent component
const emit = defineEmits( ['arrived-or-left', 'delete-student'])

// Creating a reactive reference to track if the student is present
// Initialized with the value from props.student.present
const isStudentPresent = ref(props.student.present)

// Function to notify the parent component when the student's status changes
const notifyArrivedOrLeft = () => {
    // tell parent that student arrived or left - emit event
    emit('arrived-or-left', props.student, isStudentPresent.value)
}

// Function to delete student and parent component
const confirmDeleteStudent = () => {
    if (confirm(`Delete ${props.student.name}?`)) {
    emit('delete-student', props.student)
    }
}

</script>

<template>
    
    <tr class="align-middle" v-bind:class="{present: student.present, absent: !student.present}">

        <td>{{student.name}}</td>
        <td>{{student.starID}}</td>
        <td>
            <!-- TODO v-model checkbox-->
            <input type="checkbox" v-model="isStudentPresent" v-on:change="notifyArrivedOrLeft">
            <span v-if="student.present" class="mx-3">Here</span>
            <span v-else class="mx-3">Not present</span>
        </td>
        <td>
            <button v-on:click="confirmDeleteStudent" class="btn btn-danger">
                <i class="bi bi-trash-fill"></i> Delete
            </button>
        </td>

    </tr>

</template>


<style scoped>

.present {
    color: gray;
    font-style: italic;
}

.absent {
    color: black;
    font-weight: bold;
}

</style>