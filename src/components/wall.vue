<script>
export default {
    name: "Wall"
}
</script>

<template>

<h1>Wall</h1>
    <div class="container-lg">
        <div class="form-floating">
        </div>
        <div contenteditable class="form-control" placeholder="Leave a comment here" id="floatingTextarea">
        </div>
        <div class="d-flex">
            <label for="file-input" class="btn-add btn mt-1">Ajouter une image</label>
            <input id="file-input" type="file" />
            <button class="btn mt-1 ms-auto" type="button">Poster</button>
        </div>
    </div>
</template>

<style>
#file-input {
    display: none;
}
.btn-add {
    background-color:gray;
    color: white;
}
</style>