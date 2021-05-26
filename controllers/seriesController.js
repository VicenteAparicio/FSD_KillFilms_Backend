const axios = require('axios');

class Series {

    async searchTvbytTitle(tv_title){
        let res = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=210d6a5dd3f16419ce349c9f1b200d6d&query=${tv_title}`);
        return res.data;
    }

    async findTvShow(tv_id){
        let res = await axios.get(`https://api.themoviedb.org/3/tv/${tv_id}?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);
        return res.data;
    }

    async topRated(){
        let res = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1`);
        return res.data;
    }


    async onTheAir(){
        let res = await axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1`);
        return res.data;
    }

    async inTheaters(tv_id){
        let res = await axios.get(`https://api.themoviedb.org/3/tv/${tv_id}/screened_theatrically?api_key=210d6a5dd3f16419ce349c9f1b200d6d`);
        return res.data;
    }

    async popularTV(){
        let res = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1`);
        return res.data;
    }
}


let seriesController = new Series();

module.exports = seriesController;
