const router = require('express').Router();
const authenticate = require('../middleware/authenticate');
const admin = require("../middleware/adminUser");
const movieController = require('../controllers/movieController');



//CRUD
//GET
//http://localhost:3000/movies

router.get('/allmovies', authenticate, async (req, res) => { //NOT WORKING
    try {
        res.json(await movieController.allMovies());
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

router.get('/bytitle/:title', async (req, res) => { // NOT WORKING
    try {
        const title = req.params.title;
        res.json(await movieController.moviesByTitle(title));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});










// AXIOS THE MOVIE DATA BASE TIMDB

// router.get('/bytitle/:movie', async (req, res) => {
//     try {
//         let movie = req.params.movie;
//         res.json(await movieController.searchMovieByTitle(movie));
//     } catch (err) {
//         return res.status(500).json({
//             mesaje: err.message
//         });
//     }
// });

// router.get('/toprated', async (req, res) => {
//     try {
//         res.json(await movieController.findTopRated());
//     } catch (err) {
//         return res.status(500).json({
//             mesaje: err.message
//         });
//     }
// });

// router.get('/searchid/:id', async (req, res) => {
//     try {
//         let id = req.params.id;
//         res.json(await movieController.searchById(id));
//     } catch (err) {
//         return res.status(500).json({
//             mesaje: err.message
//         });
//     }
// });

// router.get('/findallgenreid', async (req, res) => {
//     try {
//         res.json(await movieController.findAllGenreId());
//     } catch (err) {
//         return res.status(500).json({
//             mesaje: err.message
//         });
//     }
// });

// router.get('/searchgenre/:genreLog', async (req, res) => {
//     try {
//         let genreLog = req.params.genreLog;
//         res.json(await movieController.searchByGenreName(genreLog));
//     } catch (err) {
//         return res.status(500).json({
//             mesaje: err.message
//         });
//     }
// });

// router.get('/scode/:code', async (req, res) => {
//     try {
//         let codeG = req.params.code;
//         res.json(await movieController.searchByCode(codeG));
//     } catch (err) {
//         return res.status(500).json({
//             mesaje: err.message
//         });
//     }
// });

// router.get('/nowplaying', async (req, res) => {
//     try {
//         res.json(await movieController.findNowPlaying());
//     } catch (err) {
//         return res.status(500).json({
//             mesaje: err.message
//         });
//     }
// });

// router.get('/popular', async (req, res) => {
//     try {
//         res.json(await movieController.findPopular());
//     } catch (err) {
//         return res.status(500).json({
//             mesaje: err.message
//         });
//     }
// });

module.exports = router;
