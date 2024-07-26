import axios from "axios";

//https://api.themoviedb.org/3/
//https://api.themoviedb.org/3/movie/now_playing?api_key=35041bd36d1f6953dd42e41aa4cf531d&language=pt-br

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;