<script>
//import SignupVue from './components/log/Signup.vue'
//import loginVue from './components/log/login.vue'
import Header from './components/header.vue';
import Footer from "./components/footer.vue";

export default {
  name: "App",
  components: { Header, Footer, },
};
</script>

<template>
  <div id="app">
    <Header /><router-view />
    <Footer />
  </div>
</template>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
html, body {
  margin:0;
  padding:0;
  height:100%;
}
</style>
