<template>
        <div class="login__box">
          <h1>Bonjour ! 👋 </h1>
          <p class="p">Merci de vous connecter 👍 </p>
          <form class="login__form">
            <input type="email" v-model="email" placeholder="Votre Email">
            <input type="password" v-model="password" placeholder="Votre Mot de Passe">
          </form>
          <router-link to='/post'><button class="px-2 rounded-3" >Connexion</button></router-link>
          <p class="p">
          <span class="bar my-3"></span>
            Mot de passe perdu ?<br>
            <router-link to='/recovery' class="fs-6 text-decoration-none text-dark ">Récuperation de votre mot de Passe</router-link>
          </p>
        </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      email : '',   
      password : ''
    }
  },
}
</script>

<style>
.login__box {
    background-color: #FFD7D7;
  border-radius: 10px;

}
  .p {
    text-align: center;
  }
.px-2.rounded-3 {
  width: 17%;
  border-radius: 20px;
  padding: 8px;
  border-bottom: solid;
  cursor: pointer;
}
input[type="email"] {
  margin: 10px;
}
</style>
