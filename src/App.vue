<template>
  <HeaderComponent @startSearch="searchInArrays" />
  <MainComponent />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import MainComponent from './components/MainComponent.vue'

import axios from 'axios'
import { store } from './store.js'
export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getMovies() {
      axios.get(this.store.apiUrl + this.store.endpoint.movie, this.store.options).then((res) => {
        // console.log(res.data.results);
        this.store.searchResultMovie = res.data.results
        console.log(this.store.searchResultMovie, '---Movies');
      })
      // this.store.inputText=null;
    },
    getTvSeries() {
      axios.get(this.store.apiUrl + this.store.endpoint.tv, this.store.options).then((res) => {
        // console.log(res.data.results);
        this.store.searchResultTv = res.data.results
        console.log(this.store.searchResultTv, '---TV');

      })
    },
    getTrendingMovies() {
      axios.get(this.store.apiUrl + this.store.endpoint.trendingmovies, this.store.options).then((res) => {
        this.store.trendingmovies = res.data.results
        console.log(this.store.trendingmovies, '---Trendingmovies');

      })
    },
    getTrendingTvs() {
      axios.get(this.store.apiUrl + this.store.endpoint.trendingtvs, this.store.options).then((res) => {
        this.store.trendingtvs = res.data.results
        console.log(this.store.trendingtvs, '---Trendingtvs')

      });
    },
    searchInArrays() {
      this.store.landing = false
      this.store.initialDisp = true;
      if (this.store.inputText !== '') {
        this.store.options.params.query = this.store.inputText
      }
      this.getMovies(),
        this.getTvSeries(),
        this.convertRate()
    },
    convertRate() {
      setTimeout(() => {
        this.store.searchResultMovie.forEach((el) => {
          if (el.length != 0) {
            el.vote_average = Math.ceil(el.vote_average / 2)
            console.log(el.vote_average)
          }
        }),
        this.store.searchResultTv.forEach((el) => {
          if (el.length != 0) {
            el.vote_average = Math.ceil(el.vote_average / 2)
            console.log(el.vote_average)
          }
        })
      }, 1000);

    },
  },
  created() {
    this.getTrendingMovies(),
    this.getTrendingTvs()
  }
}
</script>

<style lang="scss" scoped></style>