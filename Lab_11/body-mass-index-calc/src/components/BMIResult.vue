<script setup>

// Import Used to access the Pinia store that manages.
import { useBmiStore } from '../stores/BmiStore';

// Create a reference to the store and access to the store.
const bmiStore = useBmiStore();
</script>

<template>

  <!-- display result if is not empty-->
  <div v-if="bmiStore.bmi != 0" class="bmi-result">
    <h3>Your BMI is: {{ bmiStore.bmi }} </h3>
  </div>

  <!-- display message if result is empty-->
  <div class="bmi-result" v-else>
    <h3>Fill above info for BMI</h3>
  </div>
  
</template>

<style scoped>

  .bmi-result {   /* styles for all BMIResult component */
    margin: 20px auto;
    padding: 10px 20px;
    width: 90%;
    max-width: 400px;
    text-align: center;
    border: 2px solid #1cc89d;
    border-radius: 10px;
    background-color: #f0f8ff;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  h3 { /* styles for h3 in BMIResult component */
    margin: 0;
    font-size: 1.5rem;
    color: #0c0101;
    font-weight: bold;
  }
  
</style>