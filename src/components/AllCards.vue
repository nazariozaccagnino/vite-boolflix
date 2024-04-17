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
                    <img :src="this.store.imageUrl+item.poster_path" class="card-img-top" :alt="item.title">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.title }}</h5>
                        <p class="card-text">{{ item.original_title }}</p>
                        <p class="flag"><img :src="store.flagApi+item.original_language+'.png'" :alt="item.original_language"></p>
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
                    <img :src="this.store.imageUrl+item.poster_path" class="card-img-top" :alt="item.name">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.name }}</h5>
                        <p class="card-text">{{ item.original_name }}</p>
                        <p class="flag"><img :src="store.flagApi+item.original_language+'.png'" :alt="item.original_language"></p>
                        <p class="card-text">{{ item.vote_average }}</p>
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
        height: 100%;
    }
    .flag img{
        border: 1px solid black;
        width: 30px;
    }
}
</style>