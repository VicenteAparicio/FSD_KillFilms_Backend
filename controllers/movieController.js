const axios = require('axios');
const { Movie } = require('../models');
const toolsController = require('../tools/toolsController')

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

    // async moviesByActor(actors){
    //     return Movie.findAll({where: {actors}})
    // }

    async moviesByActor(actor){
        let actorMovies = [];
        let movieSearch = await Movie.findAll();
        for (let i in movieSearch){
                let arrayActors = movieSearch[i].actors;
                let stringActors  = arrayActors.split(',');
                for (let j in stringActors){
                    if (stringActors[j] == actor){
                        actorMovies.push(movieSearch[i]);
                    }
                }
        }
        return actorMovies;
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
        let existMovie = await Movie.findOne({where: {title: movie}})

        if (existMovie){
            throw new Error("Esta película ya está en la biblioteca");
        }

        let res = await toolsController.searchMovieByTitle(movie);
        console.log(res)
        let movieId = res.id;
        let movieGenreId = res.genre_ids[0];
        let actorsMovie = [];
        let directorMovie = "";
        let count = 0;
        let j = 0;

        // Production info
        let res3 = await toolsController.searchById(movieId);
        let production = res3.production_companies[0].name;


        // Cast and Crew info
        let charactersjson = await toolsController.getCreditsMovie(movieId);
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
        let genreMovie = await toolsController.getGenreName(movieGenreId);


        return Movie.create(
            {
                title: res.original_title,
                releasedate: res.release_date,
                productor: production,
                director: directorMovie,
                actors: stringActorsMovie,
                rating: res.vote_average,
                genre: genreMovie
            }
        )
    }



}

let movieController = new Film();

module.exports = movieController;
