<script>
import PostForm from './post/PostForm.vue'
import Card from'./card.vue'
export default {
    name: "WallPage",
    components: {
        Card,
        PostForm
    },
    
}
</script>

<template>
<h1>Wall</h1>
    <div class="container-lg">
       <PostForm></PostForm>
        <hr class="dropdown">
        <Card></Card>
        <Card></Card>
        <Card></Card>
    </div>
</template>

<style>
</style>