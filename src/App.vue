<template>
  <HeaderComponent @startSearch="searchInArrays"/>
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
        console.log(this.store.inputText);
      })
    },
    getTvSeries() {
      axios.get(this.store.apiUrl + this.store.endpoint.tv, this.store.options).then((res) => {
        // console.log(res.data.results);
        this.store.searchResultTv = res.data.results
        console.log(this.store.searchResultTv, '---TV');

      })
    },
    searchInArrays(){
      if(this.store.inputText !== ''){
        this.store.options.params.query = this.store.inputText
      }
      this.getMovies(),
      this.getTvSeries()
    }
  },
  created() {
      
  }
}
</script>

<style lang="scss" scoped></style>