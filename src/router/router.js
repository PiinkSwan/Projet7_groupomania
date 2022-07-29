import SignupVue from "../components/log/Signup.vue"
import WallPage from"../components/wallPage.vue"
import LoginVue from"../components/log/login.vue"
import HeaderVue from "../components/header.vue"

import { createRouter, createWebHistory } from "vue-router"


const routes = [
    {path: "/home", component: WallPage},
    {path: "/signup", component: SignupVue},
    {path: "/login", component: LoginVue},
    {path: "/header", component: HeaderVue},
]
const router = createRouter({history: createWebHistory(), routes})

router.beforeEach((to, from) => {
console.log("from:", from)
console.log("to:", to)

if (to.path !== "/login") {
    router.push("login")
}

})
export { router }
