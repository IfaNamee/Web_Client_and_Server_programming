import { createApp } from 'vue'

// Import pinia from pinia
import { createPinia } from 'pinia'

// Import bootstrap to add css and icons.
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './style.css'
import App from './App.vue'

// createApp(App).mount('#app')

// Create a new Vue application instance with the root component 'App' with variable
const app = createApp(App)

// Initialize a Pinia store instance for state management.
const pinia = createPinia()

//Tell app to use Pinia as a plugin to the Vue application, enabling centralized state management.
app.use(pinia)

// Mount the Vue application to the DOM element with the ID 'app'.
app.mount('#app')