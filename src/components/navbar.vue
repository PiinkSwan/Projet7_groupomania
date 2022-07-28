<script></script>

<template>
<nav class="navbar">
  <div class="container">
    <router-link class="btn__home" to='/home'><button class="btn-home">Home</button></router-link>
    <a class="navbar btn-bar" href="./wall.vue">
      <img class="banner-img" src="../images/groupomania.jpg" alt="">
    </a>
    <router-link to="/signup"><button class="btn-home">Inscription</button></router-link>
    <router-link to="/login"><button class="btn-home">Connexion</button></router-link>

  </div>
</nav></template>

<style>
.banner-img {
    width: 100%;
    height: 40px;
    border-radius: 16px;
}
.navbar {
    background-color: #4E5166;
}
.banner-title {
    color: white;
}
.btn__home {
    width: 20%;
}
</style>