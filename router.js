const router = require('express').Router();


const movieRouter = require("./routes/movieRouter");
const seriesRouter = require("./routes/seriesRouter");


// ENRUTAMIENTO
router.use('/movies', movieRouter);
router.use('/series', seriesRouter);




module.exports = router;