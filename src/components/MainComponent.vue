<template>
    <main>
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
</style>