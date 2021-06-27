const router = require('express').Router();
const authenticate = require('../middleware/authenticate');
const admin = require("../middleware/adminUser");
const movieController = require('../controllers/movieController');
const toolsController = require('../tools/toolsController');



//CRUD
//GET
//http://localhost:3000/movies


// GET ALL MOVIES
router.get('/allmovies', async (req, res) => {
    try {
        res.json(await movieController.allMovies());
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

// GET MOVIES BY TITLE
router.get('/bytitle/:title', async (req, res) => {
    try {
        const title = req.params.title;
        res.json(await movieController.moviesByTitle(title));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

// GET MOVIES BY GENRE
router.get('/bygenre/:genre', async (req, res) => {
    try {
        const genre = req.params.genre;
        res.json(await movieController.moviesByGenre(genre));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

// GET MOVIES BY ACTORS
router.get('/byactor/:actor', async (req, res) => {
    try {
        const actor = req.params.actor;
        res.json(await movieController.moviesByActor(actor));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

// GET MOVIES BY ID
router.get('/byid/:id', async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await movieController.moviesById(id));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

// CREATE MOVIES BY TITLE
router.post('/createmovie', admin, async (req, res) => {
    try {
        let body = req.body;
        res.json(await movieController.createMovieByTitle(body));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

// DELTE MOVIES BY TITLE
router.post('/deletemovie', async (req, res) => {
    try {
        let body = req.body;
        res.json(await movieController.deleteMovie(body));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});



// AXIOS THE MOVIE DATA BASE TIMDB

router.get('/axiosbytitle/:movie', async (req, res) => {
    try {
        let movie = req.params.movie;
        res.json(await toolsController.searchMovieByTitle(movie));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});


router.get('/toprated', async (req, res) => {
    try {
        res.json(await toolsController.findTopRated());
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

router.get('/searchid/:id', async (req, res) => {
    try {
        let id = req.params.id;
        res.json(await toolsController.searchById(id));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

router.get('/creditsmovie/:id', async (req, res) => {
    try {
        let id = req.params.id;
        res.json(await toolsController.getCreditsMovie(id));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

router.get('/findallgenreid', async (req, res) => {
    try {
        res.json(await movieController.findAllGenreId());
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

router.get('/searchgenre/:genreLog', async (req, res) => {
    try {
        let genreLog = req.params.genreLog;
        res.json(await toolsController.searchByGenreName(genreLog));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

router.get('/searchbygenreid/:genreid', async (req, res) => {
    try {
        let genreId = req.params.genreid;
        res.json(await toolsController.searchByCode(genreId));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

router.get('/nowplaying', async (req, res) => {
    try {
        res.json(await toolsController.findNowPlaying());
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

router.get('/popular', async (req, res) => {
    try {
        res.json(await toolsController.findPopular());
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});


router.get('/axiostop', async (req, res) => {
    try {
        res.json(await toolsController.findTopRated);
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});


router.get('/axiosbytitle/name', async (req, res) => {
    try {
        let name = req.params.name;
        res.json(await toolsController.searchMovieByTitle(name));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});



module.exports = router;
