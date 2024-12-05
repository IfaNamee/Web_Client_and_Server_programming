<script setup>

// Import Used to access the Pinia store that manages.
import { useBmiStore } from '../stores/BmiStore';

// Access Pinia store
const bmiStore = useBmiStore();
</script>

<template>
    <div id="reactive-box">
        <h2>Enter your height and weight</h2>

        <!-- Metric Units labels and inputs -->
        <div v-if="bmiStore.isChecked" class="input-section">

            <label>Height in meters:</label>
            <input v-model="bmiStore.height" type="number" placeholder="Enter height in meters"/>

            <label>Weight in kilograms:</label>
            <input v-model="bmiStore.weight" type="number" placeholder="Enter weight in kilograms"/>

        </div>

        <!-- Imperial Units labels and inputs  -->
        <div v-else class="input-section">

            <label>Height in inches:</label>
            <input v-model="bmiStore.heightInches" type="number" placeholder="Enter height in inches"/>

            <label>Weight in pounds:</label>
            <input v-model="bmiStore.weightPounds" type="number" placeholder="Enter weight in pounds"/>

        </div>

        <!-- Calculate BMI Button -->
        <button v-on:click="bmiStore.calculateBMI">Calculate</button>
        
    </div>
</template>
  
<style scoped>
    #reactive-box { /* styles for all in component */
        margin: 20px auto;
        padding: 20px;
        width: 90%;
        max-width: 400px;
        border: 1px solid #ccc;
        border-radius: 10px;
        background-color: #f8f8f8;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    h2 {  /* styles for h2 in form component */
        text-align: center;
        color: #333;
        margin-bottom: 20px;
        font-size: 1.5rem;
    }
    
    .input-section { /* styles for input section in form component */
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    
    label {  /* styles for label in form component */
        font-weight: bold;
        color: #090606;
    }
    
    input {  /* styles for input in form component */
        padding: 8px 12px;
        font-size: 1rem;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
    
    button { /* styles for all button in form component */
        display: block;
        font-size: 1.5rem;
        margin: 20px auto;
        width: 100%;
        padding: 10px 0;
        background-color: #28a745;
        border: none;
        border-radius: 5px;
    }
    
    button:hover {  /* styles for button hover in form component */
        background-color: #218838;
    }
    
    button:active { /* styles for button active in form component */
        background-color: #1e7e34;
    }
    
</style>