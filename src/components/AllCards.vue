<template>

    <div :class="{ 'd-none': !store.initialDisp }">
        <div v-if="this.store.searchResultMovie.length === 0">
            <h2>Risultati per: {{ this.store.inputText }}</h2>
            <h3>Movies</h3>
            <NoResults />
        </div>
        <div v-else class="row">
            <h2>Risultati per: {{ this.store.inputText }}</h2>
            <h3>Movies</h3>
            <div class="col-3 my-2" v-for="(item, index) in this.store.searchResultMovie">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="card flip-card-front">
                            <img :src="this.store.imageUrl + item.poster_path" class="card-img-top" :alt="item.title">
                            <div class="fronttitle">{{ item.title }}</div>
                        </div>
                        <div class="card flip-card-back">
                            <h5 class="card-title">{{ item.title }}</h5>
                            <p class="card-text">{{ item.original_title }}</p>
                            <p class="flag"><img :src="store.flagApi + item.original_language + '.png'"
                                    :alt="item.original_language"></p>
                            <p class="card-text">{{ item.vote_average }}</p>
                            <p class="text-center">Overview</p>
                            <p class="card-text overview">{{ item.overview}}</p>
                        </div>
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
            <div class="col-3 my-2" v-for="(item, index) in this.store.searchResultTv">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="card flip-card-front">
                            <img :src="this.store.imageUrl + item.poster_path" class="card-img-top" :alt="item.name">
                            <div class="fronttitle">{{ item.name }}</div>
                        </div>
                        <div class="card flip-card-back">
                            <h5 class="card-title">{{ item.name }}</h5>
                            <p class="card-text">{{ item.original_name }}</p>
                            <p class="flag"><img :src="store.flagApi + item.original_language + '.png'"
                                    :alt="item.original_language"></p>
                            <p class="card-text">{{ item.vote_average }}</p>
                            <p class="text-center">Overview</p>
                            <p class="card-text overview">{{ item.overview}}</p>
                        </div>
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
    components: {
        NoResults
    },
    data() {
        return {
            store,
        }
    },
    computed: {
        // convertRate(){
        //     return Math.ceil(this.item.vote_average * 10) / 10;
        // }

    },
    created() {
        // this.convertRate()
        // console.log(this.item.name);
    }
}
</script>

<style lang="scss" scoped>
.card {
    padding: 5px;
    height: 100%;

    img {
        height: 100%;
    }

    .flag img {
        border: 1px solid black;
        width: 30px;
    }
}

.flip-card {
    background-color: transparent;
    aspect-ratio: 1/1.5;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    //   text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.flip-card-back {
    background-color: rgba(0, 0, 0, 0.486);
    color: white;
    transform: rotateY(180deg);
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.fronttitle {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background-color: rgba(128, 128, 128, 0.378);
    color: white;
}
.overview{
    overflow: auto;
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background:#555;
  ;
}
::-webkit-scrollbar-thumb {
  background:  #f1f1f183
}
</style>