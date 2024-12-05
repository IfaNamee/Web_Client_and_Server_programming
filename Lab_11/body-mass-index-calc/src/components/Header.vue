<script setup>

// Import Used to access the Pinia store that manages.
import { useBmiStore } from '../stores/BmiStore';

// Access Pinia store
const bmiStore = useBmiStore();

</script>

<template>
  <div class="all-page">
    <h1>Body Mass Index Calculator</h1>

    <!-- Checkbox to toggle between metric and US units -->
    <label class="toggle-label">
      <input type="checkbox" v-model="bmiStore.isChecked"/> Use metric units
    </label>
  </div>
</template>


<style scoped>
  .all-page { /* styles for all header component */
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    align-items: center;
    background-color: olive;
    max-width: 600px;
  }

  h1 {  /* styles for h1 in header component */
    font-size: 2rem;
    color: #0c0000;
    margin-bottom: 1rem;
    margin: 20px auto;
  }

  .toggle-label {  /* styles for toggler in header component */
    font-weight: bold;
    font-size: 1.5rem;
    color: #060000;
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  input[type="checkbox"] {
    transform: scale(1.2);
    cursor: pointer;
  }

</style>