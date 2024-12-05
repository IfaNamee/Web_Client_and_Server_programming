<script setup>

// Import file for each componemt 
import NewStudentForm from './components/NewStudentForm.vue'
import StudentTable from './components/StudentTable.vue'
import StudentMessage from './components/StudentMessage.vue'

</script>

<template>

  <!-- Underline warning sign occurs because Vue 3 enforces that 
  the template root must have exactly one root element. so i added one main <div></div> -->
  <div>

    <StudentMessage></StudentMessage>

    <StudentTable></StudentTable>

    <NewStudentForm></NewStudentForm>

  </div>

</template>


<style scoped>

/* CSS for this component */

</style>