<template>
    
    <div :class="{'d-none': !store.initialDisp}">
        <div v-if="this.store.searchResultMovie.length === 0">
            <h3>Movies</h3>
            <NoResults />
        </div>
        <div v-else class="row">
            <h3>Movies</h3>
            <div class="col-3 my-2" v-for="(item,index) in this.store.searchResultMovie">
                <div class="card">
                    <img :src="this.store.imageUrl+item.poster_path" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.title }}</h5>
                        <p class="card-text">{{ item.original_title }}</p>
                        <p class="card-text">{{ item.original_language }}</p>
                        <p class="card-text">{{ item.vote_average }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="this.store.searchResultTv.length === 0">
            <h3>Series</h3>
            <NoResults />
        </div>
        <div class="row" v-else>
            <h3>Series</h3>
            <div class="col-3 my-2" v-for="(item,index) in this.store.searchResultTv">
                <div class="card">
                    <img :src="this.store.imageUrl+item.poster_path" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.name }}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the
                            card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js'
import NoResults from './NoResults.vue'

export default {
    name: 'AllCards',
    components:{
        NoResults
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    padding: 5px;
    height: 100%;
    img{
        height: 70%;
    }
}
</style>