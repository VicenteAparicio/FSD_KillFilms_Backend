const { User } = require('../models');
const axios = require('axios');

class Tools {


    // AXIO TOOLS

    // SEARCH MOVIE BY TITLE
    async searchMovieByTitle(title) {
        
        let res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&query=${title}`);
        for (let i in res.data.results){

        
            if (res.data.results[i].original_title.toLowerCase() == title.toLowerCase()){
                
                return res.data.results[i];
            }
        }
    }
    
    // SEARCH TOP RATED MOVIES
    async findTopRated() {
        let res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1');
        console.log(res)
        return res.data.results;
    }

    // SEARCH MOVIE BY ID
    async searchById(id) {
        let res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);
        return res.data;
    }

    // GET CREDITS INFO BY ID
    async getCreditsMovie(id) {
        let res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);
        return res;
    }


    // GET GENRE NAME BY ID
    async getGenreName(movieGenreId){
        let res = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);
        let arrayGenre = res.data.genres;
        for (let i in arrayGenre) {
            if (movieGenreId == arrayGenre[i].id){
                
                let genreMovie = arrayGenre[i].name;
                return genreMovie;
            }
        }  
    }

    // SEARCH MOVIES IN TMDB BY GENRE NAME
    async searchByGenreName(genreName) {
        let res = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);
        let arrayGenre = res.data.genres;

        for (let i in arrayGenre) {
            if (genreName == arrayGenre[i].name) {
                let code1 = arrayGenre[i].id;
                let res2 = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&with_genres=${code1}`);
                return res2.data;
            }
        }
    }

    // SEARCH MOVIES IN TMDB BY GENRE ID
    async searchByGenreId(genreId) {
        let res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&with_genres=${genreId}`);
        return res.data;
    }

    // SEARCH MOVIES IN TMDB ON AIR 
    async findNowPlaying() {
        let res = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1');
        return res.data;
    }

    // SEARCH POPULAR MOVIES ON TMDB
    async findPopular() {
        let res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1');
        return res.data;
    }
}



let toolsController = new Tools();

module.exports = toolsController;