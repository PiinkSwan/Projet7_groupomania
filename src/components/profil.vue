<template>
<div>
    <Banner message='Votre profil'></Banner>
    <ul class="list-group w-50 m-auto mt-5">
      <li class="list-group-item">Votre pseudo : {{ pseudo }}</li>
      <li class="list-group-item">Votre adresse Email : {{ email }}</li>
      <li class="list-group-item"><button class="rounded px-3">Supprimer mon compte</button></li>
    </ul>
</div>
</template>
<script>
  import Banner from '../components/header.vue'
export default {
  name: 'Profil',
  components:{
      Banner,
  },
}
</script>