<template>
    <div class="register__box">
        <h1>Rejoignez-nous</h1>
        <p>sur votre réseau d'entreprise</p>
        <form>
            <input type="text" v-model="pseudo" placeholder="Votre Pseudo">
            <input type="text" v-model="email" placeholder="Votre Email">
            <input type="password" v-model="password" placeholder="Votre Mot de Passe">
            <input type="password" v-model="password" placeholder="Confirmer votre Mot de Passe">
        </form>
        <router-link to='/post'><button class="px-2 rounded-3">Inscription</button></router-link>
</div>
</template>

<script>
export default {
  name: 'Register',
}
</script>


<style></style>