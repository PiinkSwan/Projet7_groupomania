<template>
      <img class="logo" src="../../images/groupomania.jpg" alt="">
      <h1 class="groupo">Groupomania</h1>
      <p class="welcome">Bienvenue sur votre réseau social d'entreprise </p>
        <div class="login__box">
          <form class="login__form">
             Email 
            <input type="email" v-model="email" placeholder="Votre Email">
             Mot de passe 
            <input type="password" v-model="password" placeholder="Votre Mot de Passe">
          </form>
          <router-link to='/home'><button class="px-2 rounded-3">Connexion</button></router-link>
        </div>
        <div id="router_link">
            <router-link id="btn_signup" to="/signup">S'inscrire</router-link>

        </div>

</template>

<script>
export default {
  name: 'Login',
}
</script>

<style>
.logo {
  width: 10%;
  margin: auto;
  
}
.groupo {
  font-weight:bolder;
  text-align: center;
  color: #FD2D01;
}
.welcome {
  text-align: center;
  margin: revert;
  font-weight: 400;
  font-size: x-large;

}
.login__box {
  background-color: #FFD7D7;
  margin: auto;
  width: 100%;
  padding: 32px;
  height: 276px;
}
.px-2.rounded-3 {
  border-radius: 20px;
  padding: 8px;
  border: solid #4E5166;
  cursor: pointer;
  width: 20%;
}
input[type="email"] {
  margin: 10px;
}
#router_link {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 10px;
}
#btn_signup {
    width: 15%;
    border-radius: 12px;
    padding: 8px;
    border: solid #4E5166;
    color: #4E5166;
}
</style>
