<script setup>
import BodyMassIndexForm from './components/BodyMassIndexForm.vue'

import {ref} from 'vue'

// Reactive state for height, weight, and BMI
const height = ref(); // Height in meters
const weight = ref(); // Weight in kilograms

const bmi = ref(); // Calculated BMI
const isChecked = ref(false); // For toggle between metric and imperial

const heightInches = ref(); // Height in inches
const weightPounds = ref(); // Weight in pounds

// Method to calculate BMI 
// Method to calculate BMI based on selected units
const calculateBMI = () => {

  // check if box marked
  if (isChecked.value == true) {
    // Metric units (kg and meters)
    if (!height.value || !weight.value || height.value <= 0 || weight.value <= 0) {
      alert('Please enter valid positive values for height and weight.');
      return;
    }
    // BMI calculation formula meter and kilogram: BMI = (weight in kilogram / (height in meter ** 2)
    bmi.value = (weight.value / (height.value ** 2)).toFixed(2);

  } else {
    // US units (pounds and inches)
    if (!heightInches.value || !weightPounds.value || heightInches.value <= 0 || weightPounds.value <= 0) {
      alert('Please enter valid positive values for height and weight.');
      return;
    }
    // BMI calculation formula for pounds and inches: BMI = (weight in pounds / (height in inches)^2) * 703
    bmi.value = ((weightPounds.value / (heightInches.value ** 2)) * 703).toFixed(2);
  }

  // Clear input fields after calculation
  height.value = '';
  weight.value = '';

  heightInches.value = '';
  weightPounds.value = '';
}

</script>

<template>
  <div id="all-page">
    <h1>Body Mass Index Calculator</h1>

    <!-- Checkbox to toggle between metric and US units -->
    <label>
      <input type="checkbox" v-model="isChecked" /> Use metric units
    </label>

      <!-- Pass props and bind events -->
      <body-mass-index-form
        v-model:height="height"
        v-model:weight="weight"
        v-model:heightInches="heightInches"
        v-model:weightPounds="weightPounds"
        v-model:isChecked="isChecked"
        v-on:calculate="calculateBMI">
      </body-mass-index-form>

    <!-- Display BMI result if only user entered corretly  -->
    <div v-if="bmi">
      <h3>Your BMI is: {{ bmi }}</h3>
    </div>
    
  </div>
</template>

<style scoped>
#all-page {
  border: 3px solid green;
  padding: 20px;
  border-radius:5px;
  margin: 20px auto;
}

</style>