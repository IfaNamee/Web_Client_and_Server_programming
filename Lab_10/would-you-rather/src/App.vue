<script setup>
import WouldYouRather from './components/WouldYouRather.vue'

import {ref} from 'vue'

const question = ref('Live in a house shaped like a triangle or a house shaped like a circle?')
const answer1 = ref('Trinangle house')
const answer2 = ref ('Circle house')

// this will store the user's answer once they made choice

const userSelection = ref('')

function updateUserSelection(userChoice) {
  userSelection.value = `Thanks! you chose ${userChoice}`
}

</script>

<template>

<!-- WORK TOO but underline warning sign occurs because Vue 3 enforces that 
  the template root must have exactly one root element. so i added <div></div> -->

<div id="app-component">
  <h1>Would You Rather?</h1>

    <WouldYouRather 
      v-bind:question="question"
      v-bind:answer1="answer1"
      v-bind:answer2="answer2"
      v-on:answer-selected="updateUserSelection">
    </WouldYouRather>

    <p>{{userSelection}}</p>

</div>


<!-- WROK TOO 

<div>
      <h1>Would You Rather?</h1>
      <WouldYouRather :question="question" :answer1="answer1" :answer2="answer2" />
    </div>

-->
    
   
</template>

<style scoped>
#app-component {
  font-size: 2em;
  background-color: black;
  padding: 40px;
}

p {
  font-family: 'Courier New', Courier, monospace;
}

</style>