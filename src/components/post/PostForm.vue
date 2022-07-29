<script>
export default {
    name: 'PostForm',
    //methods: {
        //handClicks () {
            //const {VITE_SERVER_ADRESS, VITE_SERVER_PORT} = import.meta.en
            //const url =
        
    //}
}
</script>

<template>
       <div class="form-floating">
        </div>
        <div contenteditable class="form-control" placeholder="Leave a comment here" id="floatingTextarea">
        </div>
        <div class="d-flex">
            <label for="file-input" class="btn-add btn mt-1">Ajouter une image</label>
            <input id="file-input" type="file" />
            <button @click="handClick" class="btn mt-1 ms-auto" type="button">Publier</button>
        </div>

</template>

<style>
    #file-input {
    display: none;
}
.btn-add {
    background-color: #FFD7D7;
    color: #4E5166;
}
</style>