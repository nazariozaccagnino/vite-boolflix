<template>
    <iframe title="YouTube video player"
        :src="`https://www.youtube.com/embed/${youtubeUrl}?autoplay=1&loop=1&mute=0&start=3&controls=0&showinfo=0&rel=0`"
        width="1920" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</template>

<script>
import { store } from '../store.js'
import axios from 'axios'

export default {
    name: 'TrailerComponent',
    data() {
        return {
            store,
            youtubeUrl: '',
        }
    },
    methods: {
        getTrailerUrl() {
            axios.get(this.store.apiUrl + 'movie/' + this.store.trailerid + '/videos', this.store.options).then((res) => {
                const last = res.data.results[res.data.results.length - 1]
                console.log(last,'last');
                this.youtubeUrl = last.key
                console.log(this.youtubeUrl);

            })
        }
    },
    updated() {
        this.getTrailerUrl()
    }
}
</script>

<style lang="scss" scoped>
iframe {
    width: 100%;
    height: 400px;
    position: absolute;
    z-index: 1001;
}
</style>