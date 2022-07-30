<script>

export default {
  name: 'Signup',
}
</script>

<template>
      <img class="logo" src="../../images/groupomania.jpg" alt="">
      <h1 class="groupo">Groupomania</h1>
      <p class="welcome">Bienvenue sur votre réseau social d'entreprise </p>

        <div class="register__box">
        <form>
          <p>Nom</p>
            <input type="text" v-model="pseudo " placeholder="Votre nom">
            <p>Email</p>
            <input type="text" v-model="email" placeholder="Votre email">
            <p>Mot de passe</p>
            <input type="password" v-model="password" placeholder="Votre mot de passe">
        </form>
        <router-link to='/home'><button class="btn-signup">S'incrire</button></router-link>
</div>
</template>

<style>
.register__box {
  background-color: #FFD7D7;

}
 form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    color: #4E5166;
 }
 input {
  padding: 8px;
  width: 60%;
  border-bottom: solid #4E5166;
}

 .btn-signup {
  width: 20%;
  border-radius: 20px;
  padding: 8px;
  border-bottom: solid;
  cursor: pointer;
 }
 a {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 19px;
    text-decoration-line: none;
    color: #4E5166;
 }
</style>