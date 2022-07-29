<script>
import Header from './components/header.vue';
import Footer from "./components/footer.vue";
import Navbar from "./components/navbar.vue";
import Login from './components/log/login.vue';
export default {
  name: "App",
  components: { Header, Footer, Navbar, Login },
};
</script>

<template>
  <div id="app">

    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&display=swap');
#app {
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
html, body {
  font-family: 'Lato',;
  padding:55px;
  height:100%;
}
.title__center {
  text-align: center;
  padding: 44px;
}
.texte {
  text-align: center;
  font-size: larger;
}
.signup {
   width: 20%;
  border-radius: 20px;
  padding: 8px;
  border-bottom: solid;
  cursor: pointer;
 }


</style>