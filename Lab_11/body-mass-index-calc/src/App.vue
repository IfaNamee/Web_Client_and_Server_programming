<script setup>

// Import file for each componemt 
import Header from './components/Header.vue'
import BMICalculatorForm from './components/BMICalculatorForm.vue'
import BMIResult from './components/BMIResult.vue'

</script>

<template>
  <div class="outer-container">
    <div class="app-container">

        <Header></Header>
        <BMICalculatorForm></BMICalculatorForm>
        <BMIResult></BMIResult>
      
    </div>
  </div>
</template>

<style scoped>
/* Outer container to center the app */
.outer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Full viewport height */
}

/* Root container for the app */
.app-container {
  padding: 20px;
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  background-color: #787885;
  box-shadow: 2px 6px 10px rgba(0.2);
}
</style>
