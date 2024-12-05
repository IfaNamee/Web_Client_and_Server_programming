import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBmiStore = defineStore('bmiStore', () => {
    const height = ref('') // Metric height meters
    const weight = ref('') // Metric weight kilograms

    const heightInches = ref('') // Imperial height inches
    const weightPounds = ref('') // Imperial weight pounds
    
    const isChecked = ref(false) // Toggle between metric and imperial
    const bmi = ref('') // Calculated BMI

    const calculateBMI = () => {
      if (isChecked.value === true) {
        // Metric units and check if user enter empty or less zero
        if (!height.value || !weight.value || height.value <= 0 || weight.value <= 0) {
          alert('Please enter valid positive values for height and weight.');
          bmi.value = ''
          return;
        }
        // Calculate BMI in metric units
        bmi.value = (weight.value / (height.value ** 2)).toFixed(2)

      } else {
        // US units and check if user enter empty or less zero
        if (!heightInches.value || !weightPounds.value || heightInches.value <= 0 || weightPounds.value <= 0) {
          alert('Please enter valid positive values for height and weight.');
          bmi.value = ''
          return
        }
        // Calculate BMI in imperial units
        bmi.value = ((weightPounds.value / (heightInches.value ** 2)) * 703).toFixed(2)
      }

        // Clear input fields after calculation
    height.value = '';
    weight.value = '';

    heightInches.value = '';
    weightPounds.value = '';
    
}

  return {

    // reactive data
    height,
    weight,
    heightInches,
    weightPounds,
    isChecked,
    bmi,

    calculateBMI,
  }
})
