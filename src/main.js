import { createApp,} from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import {router} from './router/router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import App from './App.vue'

const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
app.mount('#app')

createApp(App)
.use(router)