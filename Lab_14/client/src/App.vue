<script setup>

import { onMounted } from 'vue'

// Import file for each componemt 
import NewStudentForm from './components/NewStudentForm.vue'
import StudentTable from './components/StudentTable.vue'
import StudentMessage from './components/StudentMessage.vue'

import { useStudentStore } from './stores/StudentStore'

const studentStore = useStudentStore()

onMounted( () => {
  // Whatever is in here will run the component is first displayed
  studentStore.getAllStudent()
})

</script>

<template>

  <!-- Underline warning sign occurs because Vue 3 enforces that 
  the template root must have exactly one root element. so i added one main <div></div> -->
  <div class="all">

    <h1 class="bg-success text-white text-center rounded p-4 shadow-lg">Student Sign In</h1>

    <NewStudentForm></NewStudentForm>

    <StudentMessage></StudentMessage>

    <StudentTable></StudentTable>

  </div>

</template>


<style scoped>

.all {
 margin: 20px;
}

</style>