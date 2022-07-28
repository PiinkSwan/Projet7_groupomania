<script>
export default {
  name: 'Signup',
}
</script>

<template>

        <div class="register__box">
        <form>
          <p>Nom</p>
            <input type="text" v-model="pseudo" placeholder="">
            <p>Email</p>
            <input type="text" v-model="email" placeholder="">
            <p>Mot de passe</p>
            <input type="password" v-model="password" placeholder="">
        </form>
        <router-link to='/post'><button class="btn-signup">S'incrire</button></router-link>
</div>
</template>

<style>
.register__box {
  background-color: #FFD7D7;
  border-radius: 10px;

}
 form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    color: #4E5166;
 }
 input {
  border-radius: 20px;
  padding: 8px;
  width: 40%;
  border-bottom: solid;
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