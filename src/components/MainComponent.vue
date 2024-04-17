<template>
    <main>
        <div class="container">
            <div>
                <AllCards />
            </div>

        </div>

    </main>
</template>

<script>
import AllCards from './AllCards.vue'
import { store } from '../store.js'

export default {
    name: 'MainComponent',
    components: {
        AllCards
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
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.588);
}
</style>