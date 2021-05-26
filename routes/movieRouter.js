const router = require('express').Router();

const movieController = require('../controllers/movieController');



//CRUD


//GET

//http://localhost:3000/movies
router.get('/bytitle/:movie', async (req, res) => {
    try {
        let movie = req.params.movie;
        res.json(await movieController.searchMovieByTitle(movie));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});



router.get('/toprated', async (req, res) => {
    try {
        res.json(await movieController.findTopRated());
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

router.get('/searchid/:id', async (req, res) => {
    try {
        let id = req.params.id;
        res.json(await movieController.searchById(id));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

router.get('/searchgenre/:genreLog', async (req, res) => {
    try {
        let genreLog = req.params.genreLog;
        res.json(await movieController.searchByGenreName(genreLog));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

router.get('/scode/:code', async (req, res) => {
    try {
        let codeG = req.params.code;
        res.json(await movieController.searchByCode(codeG));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

router.get('/nowplaying', async (req, res) => {
    try {
        res.json(await movieController.findNowPlaying());
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

router.get('/popular', async (req, res) => {
    try {
        res.json(await movieController.findPopular());
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

module.exports = router;
