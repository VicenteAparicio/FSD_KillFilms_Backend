const axios = require('axios');
const { Movie } = require('../models');
const bcrypt = require('bcrypt');

class Film {

    async allMovies(){
        return Movie.findAll();
    }

    async moviesByTitle(title){
        return Movie.findOne({where: {title}})
    }

    async moviesByGenre(genre){
        return Movie.findAll({where: {genre}})
    }

    async moviesByActor(actors){
        return Movie.findAll({where: {actors}})
    }

    async moviesById(id){
        return Movie.findByPk(id)
    }

    async deleteMovie(body){
        let title = body.title;
        return Movie.destroy(({where: {title}}))
    }

    async createMovieByTitle(body) {
        let movie = body.title;
        console.log(movie)
        let res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&query=${movie}`);
        let movieId = res.data.results[0].id;
        let movieGenreId = res.data.results[0].genre_ids[0];
        let genreMovie = "";
        let actorsMovie = [];
        let directorMovie = "";
        let count = 0;
        let j = 0;

        // Production info
        let res3 = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);
        let production = res3.data.production_companies[0].name;
        console.log(production)


        // Cast and Crew info
        let charactersjson = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);
        let cast = charactersjson.data['cast'];
        let crew = charactersjson.data['crew'];

        do{
            if (cast[j].known_for_department == "Acting"){
                actorsMovie.push(cast[j].name);
                count++;
            }
            j++;
        } while (count<5);

        let stringActorsMovie = actorsMovie.toString();
        
        for (let k in crew){
            if (crew[k].job == "Director" && crew[k].department == "Directing"){
                directorMovie = crew[k].name;
                console.log("Este es el director: " + directorMovie)
            }
        }

        // Genre info
        let res2 = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);
        let arrayGenre = res2.data.genres;
        
        for (let i in arrayGenre) {
            if (movieGenreId == arrayGenre[i].id){
                genreMovie = arrayGenre[i].name;
            }
        }


        console.log("llegamos a crear?")
        return Movie.create(
            {
                title: res.data.results[0].original_title,
                releasedate: res.data.results[0].release_date,
                productor: production,
                director: res.data.results[0].original_title,
                actors: stringActorsMovie,
                rating: res.data.results[0].vote_average,
                genre: genreMovie
            }
        )
    }

    // async searchMovieByTitle(movie) {
    //     let res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&query=${movie}`);

    //     return res.data.results[0];
    // }

    // async searchMovieByTitle(movie) {
    //     let res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&query=${movie}`);
    //     return res.data.results[0];
    // }

    // async findTopRated() {
    //     let res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1');
    //     return res.data;
    // }

    // async searchById(id) {
    //     let res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);
    //     return res.data;
    // }

    // async findAllGenreId(){
    //     let res = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);
    //     return res.data;
    // }

    // async searchByGenreName(genreName) {
    //     let res = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);
    //     let arrayGenre = res.data.genres;

    //     for (let i in arrayGenre) {
    //         if (genreName == arrayGenre[i].name) {
    //             let code1 = arrayGenre[i].id;
    //             let res2 = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&with_genres=${code1}`);
    //             return res2.data;
    //         }
    //     }
    // }

    // async searchByCode(code) {
    //     let res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&with_genres=${code}`);
    //     return res.data;
    // }


    // async findNowPlaying() {
    //     let res = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1');
    //     return res.data;
    // }

    // async findPopular() {
    //     let res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1');
    //     return res.data;
    // }

}

let movieController = new Film();

module.exports = movieController;
