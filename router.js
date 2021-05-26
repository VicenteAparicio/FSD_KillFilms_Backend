const router = require('express').Router();


const movieRouter = require("./routes/movieRouter");
// const seriesRouter = require("./routes/seriesRouter");
const userRouter = require("./routes/userRouter");
const orderRouter = require("./routes/orderRouter");



// ENRUTAMIENTO
router.use('/movies', movieRouter);
// router.use('/series', seriesRouter);
router.use('/users', userRouter);
router.use('/order', orderRouter);



module.exports = router;
