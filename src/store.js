import {reactive} from "vue"

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    endpoint:{
        movie: 'search/movie',
        tv: 'search/tv',
        trendingmovies: 'trending/movie/week?language=en-US',
        trendingtvs: 'trending/tv/week?language=en-US'
    },
    options:{
        params:{
            api_key: '7c047038d4238bf09b7fa81c9071f166',
        }
    },
    imageUrl: 'https://image.tmdb.org/t/p/w300',
    searchResultMovie:[],
    searchResultTv:[],
    trendingmovies:[],
    trendingtvs: [],
    inputText:'',
    initialDisp: false,
    flagApi: '/images/flags/',
    vote: '',
    landing:true

});