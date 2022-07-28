import { createApp,} from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import { createRouter, createWebHistory } from "vue-router"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import App from './App.vue'

import SignupVue from "./components/log/Signup.vue"
import Wall from"./components/wall.vue"
import LoginVue from"./components/log/login.vue"
import HeaderVue from "./components/header.vue"


const routes = [
    {path: "/home", component: Wall},
    {path: "/signup", component: SignupVue},
    {path: "/login", component: LoginVue},
    {path: "/header", component: HeaderVue},
]
const router = createRouter({history: createWebHistory(), routes})


const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
app.mount('#app')

createApp(App)
.use(router)
