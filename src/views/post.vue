<template>
<div class="contenu">
    <Banner message="Votre réseau d'entreprise"></Banner>
    <BodyPost></BodyPost>

</div>
</template>

<script>
import Banner from '../components/header.vue'
//import BodyPost from '../components/post/post_body.vue'
export default {
    name: 'Post',
    components: {
    Banner,
    BodyPost
    },
}
</script>

<style src='../components/post/post.css'></style>