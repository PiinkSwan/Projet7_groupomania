<script></script>

<template>
<nav class="navbar">
  <div class="container">
    <a class="navbar btn-bar" href="./wall.vue">
      <img class="banner-img" src="../images/groupomania.jpg" alt="">
    </a>
    <router-link to='/home'><button class="btn-home">Accueil</button></router-link>
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
.btn-home {
    width: 125%;
}
a {
  text-decoration: none;
}
</style>