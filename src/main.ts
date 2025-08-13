import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'                 // stiluri Vuetify
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// Pinia
app.use(createPinia())

// Vuetify
const vuetify = createVuetify({
  components,
  directives,
})
app.use(vuetify)

// Router
app.use(router)

app.mount('#app')
