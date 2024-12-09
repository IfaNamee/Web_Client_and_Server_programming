<script setup>
import { ref, watch } from 'vue'

defineProps({
  question: String,
  answer1: String,
  answer2: String
})

const emit = defineEmits([
  'answer-selected'
])

const choice = ref()

// function choiceMade() {
  // emit event to tell parent that user has made choice 
//  emit('answer-selected', choice.value)
// }

watch( choice, () => {
  emit('answer-selected', choice.value)
})

</script>

<template>

  <!-- WORK TOO but underline warning sign occurs because Vue 3 enforces that 
    the template root must have exactly one root element. so i added <div></div> -->

  <div id="wyr">
    
      <h2>Make Your Choice!</h2>

      <p>{{ question }}</p>

      <input v-model="choice" v-bind:value="answer1" type="radio" id="answer-1">
      <label for="answer-1">{{ answer1 }}</label>

      <input v-model="choice" v-bind:value="answer2" type="radio" id="answer-2">
      <label for="answer-2">{{ answer2 }}</label>

  </div>

</template>

<style scoped>
#wyr {
  background-color: green;
  border-radius: 15px;
}

p {
  font-family: 'Times New Roman', Times, serif;
}


</style>
