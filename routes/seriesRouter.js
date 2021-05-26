const router = require('express').Router();

const seriesController = require('../controllers/seriesController');

//CRUD


//GET

//http://localhost:3000/series



router.get('/bytitle/:tv_name', async (req, res) => {
    try {
        let tv_name = req.params.tv_name;
        res.json(await seriesController.searchTvbytTitle(tv_name));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});


router.get('/toprated', async (req, res) => {
    try{
        res.json(await seriesController.topRated());
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

router.get('/searchid/:tv_id', async (req, res) => {
    try {
        let tv_id = req.params.tv_id;
        res.json(await seriesController.findTvShow(tv_id));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

router.get('/ontheair', async (req, res) => {
    try {
        res.json(await seriesController.onTheAir());
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});


router.get('/intheaters/:tv_id', async (req, res) => {
    try {
        let tv_id = req.params.tv_id;
        res.json(await seriesController.inTheaters(tv_id));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

router.get('/popularTV', async (req, res) => {
    try {
        res.json(await seriesController.popularTV());
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

module.exports = router;
