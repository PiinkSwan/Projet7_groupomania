<script>
import Header from './components/header.vue';
import Footer from "./components/footer.vue";
import Navbar from "./components/navbar.vue";

export default {
  name: "App",
  components: { Header, Footer, Navbar },
};
</script>

<template>
  <div id="app">
    <navbar />
    <router-view />
    <Header />
    <Footer />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&display=swap');
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
html, body {
  font-family: 'Lato', sans-serif;
  margin:0;
  padding:0;
  height:100%;
  font-weight: bold;
}
.title__center {
  text-align: center;
  padding: 44px;
}
</style>
