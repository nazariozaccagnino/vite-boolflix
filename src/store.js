import {reactive} from "vue"

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    endpoint:{
        movie: 'search/movie',
        tv: 'search/tv'
    },
    options:{
        params:{
            api_key: '7c047038d4238bf09b7fa81c9071f166',
            query: 'star wars'
        }
    },
    imageUrl: '',
    searchResultMovie:[],
    searchResultTv:[],

});