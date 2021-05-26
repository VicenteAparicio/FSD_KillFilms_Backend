const axios = require('axios');

class Film {


    async searchMovieByTitle(movie) {
        let res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&query=${movie}`);
        return res.data;
    }

    async findTopRated() {
        let res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1');
        return res.data;
    }

    async searchById(id) {
        let res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);
        return res.data;
    }

    async searchByGenreName(genreName) {
        let res = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);
        let arrayGenre = res.data.genres;

        for (let i in arrayGenre) {
            console.log('red alert')
            if (genreName == arrayGenre[i].name) {
                let code1 = arrayGenre[i].id;
                let res2 = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&with_genres=${code1}`);
                return res2.data;
            }
        }
    }

    async searchByCode(code) {
        let res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&with_genres=${code}`);
        return res.data;
    }


    async findNowPlaying() {
        let res = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1');
        return res.data;
    }

    async findPopular() {
        let res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1');
        return res.data;
    }

}

let movieController = new Film();

module.exports = movieController;
