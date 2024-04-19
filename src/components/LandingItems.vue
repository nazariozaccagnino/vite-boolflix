<template>
    <div class="trending">
        <h3 class="text-white">Trending Movies</h3>
        <div class="d-flex naz-scroll">
            <div class="my-2 colum" v-for="(item, index) in this.store.trendingmovies">
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
                                    <p class="stars"><img :src="`/images/stars/${item.vote_average}.png`" alt=""></p>
                            <p class="text-center">Overview</p>
                            <p class="card-text overview">{{ item.overview }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="py-2">
        <h3 class="text-white">Trending Series</h3>
        <div class="d-flex naz-scroll">
            <div class="my-2 colum" v-for="(item, index) in this.store.trendingtvs">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="card flip-card-front">
                            <img :src="this.store.imageUrl + item.poster_path" class="card-img-top" :alt="item.title">
                            <div class="fronttitle">{{ item.name }}</div>
                        </div>
                        <div class="card flip-card-back">
                            <h5 class="card-title">{{ item.name }}</h5>
                            <p class="card-text">{{ item.original_name }}</p>
                            <p class="flag"><img :src="store.flagApi + item.original_language + '.png'"
                                    :alt="item.original_language"></p>
                                    <p class="stars"><img :src="`/images/stars/${item.vote_average}.png`" alt=""></p>
                            <p class="text-center">Overview</p>
                            <p class="card-text overview">{{ item.overview }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js'

export default {
    name: 'LandingItems',

    data() {
        return {
            store
        }
    },
    methods: {
        convertRate() {
            setTimeout(() => {
                this.store.trendingmovies.forEach((el) => {
                    if (el.length != 0) {
                        el.vote_average = Math.ceil(el.vote_average / 2)
                        
                    }
                }),
                  this.store.trendingtvs.forEach((el) => {
                        if (el.length != 0) {
                            el.vote_average = Math.ceil(el.vote_average / 2)
                            
                        }
                    })  
            }, 500);

        },
    },
    mounted() {
        this.convertRate()
    }
}
</script>

<style lang="scss" scoped>
.card {
    padding: 5px;

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
    height: 100%;

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

.overview {
    overflow: auto;
}

::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-track {
    background: #555;
    ;
}

::-webkit-scrollbar-thumb {
    background: #f1f1f183
}

.colum {
    width: 200px;
    flex-shrink: 0;
}

.naz-scroll {
    overflow-x: scroll;
}

.trending {
    padding-top: 26rem;
}
</style>