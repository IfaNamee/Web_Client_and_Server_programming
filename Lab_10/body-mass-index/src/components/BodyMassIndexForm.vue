<script setup>
import { ref } from 'vue'

// Define props received from the parent component
defineProps({
  height: Number,  // Height in meters
  weight: Number,  // Weight in kilograms
  heightInches: Number, // Height in inches
  weightPounds: Number, // Weight in pounds
  isChecked: Boolean, // Toggle between metric and US units
})

// Define events to emit updates and actions
const emit = defineEmits([
  'update:height',
  'update:weight',
  'update:heightInches',
  'update:weightPounds',
  'update:isChecked',
  'calculate'
])
</script>

<template>
  <div id="reactive-box">
    <h2>Enter your height and weight</h2>

    <!-- Metric Units -->
    <div v-if="isChecked">
      <!--Checks if user choose metric and using :value, @input, and $emit short cuts for metrics -->
      <label>Height in meters:</label>
      <input :value="height" type="number" placeholder="Enter height in meters"
        @input="$emit('update:height', parseFloat($event.target.value))"/>

      <br />

      <label>Weight in kilograms:</label>
      <input :value="weight" type="number" placeholder="Enter weight in kilograms"
        @input="$emit('update:weight', parseFloat($event.target.value))"/>

      <br />
    </div>

    <!-- Imperial Units -->
     <!--Checks if user use US mode lb and inc, and using v-bind:value, v-on:input, and $emit for US units -->
    <div v-else>
      <label>Height in inches:</label>
      <input v-bind:value="heightInches" type="number" placeholder="Enter height in inches"
        v-on:input="$emit('update:heightInches', parseFloat($event.target.value))"/>
      <br />

      <label>Weight in pounds:</label>
      <input
        v-bind:value="weightPounds"
        type="number"
        placeholder="Enter weight in pounds"
        v-on:input="$emit('update:weightPounds', parseFloat($event.target.value))"/>
      <br />
    </div>

    <!-- Calculate BMI Button using @click instead of v-model:click -->
    <button @click="$emit('calculate')">Calculate</button>
  </div>
</template>

<style scoped>

#reactive-box{
  margin: 10%;
  margin-bottom: auto;
  border-radius: 5px;
  border: 3px solid blue;
}

button {
  margin: 15px;
  padding: 5px 15px;
  background-color: green;
  border-radius: 5px;
}

input {
  margin: 3px;
  padding: 5px;
  border-radius: 5px;
  font-size: 16px;
}

</style>
