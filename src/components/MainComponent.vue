<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-4 d-flex">
                <CardComponent v-for="(item,index) in this.store.searchResultMovie" />
                </div>
            </div>

        </div>

    </main>
</template>

<script>
import CardComponent from './CardComponent.vue'
import { store } from '../store.js'

export default {
    name: 'MainComponent',
    components: {
        CardComponent
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
main {
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.588);
}
</style>