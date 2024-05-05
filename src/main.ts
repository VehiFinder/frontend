import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import './../node_modules/bulma/css/bulma.css'



const vuetify = createVuetify({
    components,
    directives,
  })
  
const app = createApp(App)

app.use(vuetify)
app.use(router)
app.use(store)

app.mount('#app')
