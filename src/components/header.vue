<template>
    <div class='header pt-2 text-center'>
        <img class="img__banner" alt="Vue logo" src="../images/icon.webp">
    </div>

</template>


<script>
export default {
    name: 'Banner',
    props: {
        message : String,
    },
}
</script>

<style>
h1 {
    margin: 0;
    padding:0;
}
.img__banner {
    width:30%;
}
</style>