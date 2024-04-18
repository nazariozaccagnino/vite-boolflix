<template>
    <header class="d-flex justify-content-between align-items-center">
        <div>
            <img src="/images/boolflixlogo.png" alt="netflix" class="logo">
        </div>
        <div class="d-flex">
            <input type="text" class="form-control" v-model="store.inputText" @keyup.enter="$emit('startSearch')">
            <button type="button" class="btn btn-outline-danger mx-2" @click="$emit('startSearch')">Cerca</button>
        </div>
    </header>
</template>

<script>
import { store } from '../store.js'

export default {
    name: 'HeaderComponent',
    data(){
        return{
            store

        }
    }
}
</script>

<style lang="scss" scoped>
header{
    background-color: black;
}
.logo {
    width: 200px;
    padding: 5px;
}
</style>