<template>
  <h1 class="text-center">Ciao</h1>
  <i class="fa fa-solid fa-home"></i>
</template>

<script>
import axios from 'axios'
import { store } from './store.js'
export default {
  name: 'App',
  components:{

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
    },
    getTvSeries() {
      axios.get(this.store.apiUrl + this.store.endpoint.tv, this.store.options).then((res) => {
        // console.log(res.data.results);
        this.store.searchResultTv = res.data.results
        console.log(this.store.searchResultTv, '---TV');

      })
    },
  },
  created() {
       this.getMovies(),
       this.getTvSeries()

  }
}
</script>

<style lang="scss" scoped></style>