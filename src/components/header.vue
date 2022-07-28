<template>
    <div class='header pt-2'>
        <img alt="Vue logo" src="../images/icon.webp">
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

<style scoped>
h1 {
    margin: 0;
    padding:0;
}
.header 
{
    border-bottom: 3px solid #fd2d01 ;
}
img {
    width:30%;
}
</style>