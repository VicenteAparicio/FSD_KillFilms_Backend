// const axios = require('axios');
// const { Movie } = require('../models');

// class Tools {

//     async createMovieByTitle(body) {
//         let movie = body.title;

//         let res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&query=${movie}`);
//         let resDataMovie = res.data.results[0];
//         let movieId = resDataMovie.id;
//         let movieGenreId = resDataMovie.genre_ids[0];
//         let genreMovie = "";
//         let actorsMovie = [];
//         let directorMovie = "";
//         let count = 0;
//         let j = 0;

//         // Production info
//         let res3 = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);
//         let production = res3.data.production_companies[0].name;
//         console.log(production)


//         // Cast and Crew info
//         let charactersjson = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);
//         let cast = charactersjson.data['cast'];
//         let crew = charactersjson.data['crew'];

//         do{
//             if (cast[j].known_for_department == "Acting"){
//                 actorsMovie.push(cast[j].name);
//                 count++;
//             }
//             j++;
//         } while (count<5);

//         let stringActorsMovie = actorsMovie.toString();
        
//         for (let k in crew){
//             if (crew[k].job == "Director" && crew[k].department == "Directing"){
//                 directorMovie = crew[k].name;
//                 console.log("Este es el director: " + directorMovie)
//             }
//         }

//         // Genre info
//         let res2 = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);
//         let arrayGenre = res2.data.genres;
        
//         for (let i in arrayGenre) {
//             if (movieGenreId == arrayGenre[i].id){
//                 genreMovie = arrayGenre[i].name;
//             }
//         }

//         return Movie.create(
//             {
//                 title: resDataMovie.original_title,
//                 releasedate: resDataMovie.release_date,
//                 productor: production,
//                 director: resDataMovie.original_title,
//                 actors: stringActorsMovie,
//                 rating: resDataMovie.vote_average,
//                 genre: genreMovie
//             }
        
//         }
// }
// }










// let toolsController = new Tools();

// module.exports = toolsController;