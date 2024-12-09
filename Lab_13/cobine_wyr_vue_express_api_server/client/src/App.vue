<script setup>
import WouldYouRather from './components/WouldYouRather.vue'

// Import ref and onMounted from Vue's Composition API
import {ref, onMounted} from 'vue'

// Import wyrServise file from dir to API interaction 
import wyrService from './services/wyrService';

// Data for the question, and two answers
// Reactive references for the question and answers
const question = ref('')
const answer1 = ref('')
const answer2 = ref ('')

// this will store the user's answer once they made choice
const userSelection = ref('')

// Fetch a random WYR question when the component is mounted
onMounted( () => {
  wyrService.getRandomWYR().then( (wyrData) => {
    // Expect wyrData data to be something like -
    // {"question":"Be able to fly or be able to breathe underwater?"
    // "answer1":"Fly"
    // "answer2":"Breath underwater"}

      question.value = wyrData.question
      answer1.value = wyrData.answer1
      answer2.value = wyrData.answer2
  })
})

// Function to handle the user's selection and update the message
function updateUserSelection(userChoice) {
  userSelection.value = `Thanks! you chose ${userChoice}`
}

</script>

<template>
  
    <!-- WORK TOO but underline warning sign occurs because Vue 3 enforces that 
      the template root must have exactly one root element. so i added <div></div> -->
    <div id="app-component">

      <h1>Hello! Would You Rather..</h1>

        <WouldYouRather 
          v-bind:question="question"
          v-bind:answer1="answer1"
          v-bind:answer2="answer2"
          v-on:answer-selected="updateUserSelection">
        </WouldYouRather>

        <p>{{userSelection}}</p>

    </div>

</template>

<style scoped>
#app-component {
  font-size: 1.8em;
  background-color: black;
  padding: 40px;
  border-radius: 10px;
}

p {
  font-family: 'Courier New', Courier, monospace;
}

</style>
