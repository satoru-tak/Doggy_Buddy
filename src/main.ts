import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'

// fontawesome
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCalendarAlt, faHouseUser, faCamera } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faCalendarAlt, faHouseUser, faCamera)

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
.use(router)
.use(createPinia)
.use(vuetify)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
