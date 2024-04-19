<template>
    <main>
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/Way9Dexny3w?autoplay=1&loop=1&mute=0&start=3&controls=0&showinfo=0&rel=0" width="1920" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        <div class="container">
            <div>
                <LandingItems v-if="this.store.landing === true"/>
                <AllCards v-else/>
            </div>

        </div>

    </main>
</template>

<script>
import AllCards from './AllCards.vue'
import LandingItems from './LandingItems.vue'

import { store } from '../store.js'

export default {
    name: 'MainComponent',
    components: {
        AllCards,
        LandingItems
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
iframe{
    width: 100%;
    height: 400px;
    position: absolute;
    z-index: 1001;
}
</style>