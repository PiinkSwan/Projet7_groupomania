<template>
  <div>
    <Banner message="Recuperation de votre compte"></Banner>
          <div class="recovery__box mt-5 p-3 border border-dark">
            <h1>Bonjour</h1>
            <p>Veuillez entrer votre email de connexion</p>
            <form>
              <input type="text" placeholder="Email de connexion" class="w-80">
              <button class="w-50" >Envoyer</button>
              <p class="mt-3">Un mail vous a été envoyé</p>
            </form>
            <router-link to='/'><button class="mt-5 w-50" >Retour à l'acceuil</button></router-link>

          </div>
  </div>
</template>

<script>
import Banner from '@/components/header.vue'
export default {
  name: 'Recovery',
    components: {
    Banner
    },
}
</script>

<style src='../components/loginForm/loginForm.css'></style>