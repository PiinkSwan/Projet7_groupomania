<template>
<div>
<Banner message="Votre réseau d'entreprise"></Banner>

  <div class="container mt-5">

    <b-table striped hover :items="users"></b-table>
  </div>
  <router-link to='/post'><button type="button" class="btn_submit mt-5 shadow-sm">Retour</button></router-link> 
  </div>
</template>

<script>
import axios from 'axios';
import Banner from '../components/header.vue';
  export default {
    name: 'Admin',
    components: {
        Banner
    },
    data() {
      return {
        users: [],
      }
    },
    methods: {
        loadUser(){
            axios.get('http://localhost:3000/api/user')
            .then(res=> this.users = res.data.user)
            .catch(error => this.users = [error,{title: "Erreur lors de la recuperation des données"}])
        }
    },
    mounted: function () {
        this.loadUser()
    }
  }
</script>
<style></style>