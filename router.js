const router = require('express').Router();


const movieRouter = require("./routes/movieRouter");
const loginRouter = require("./routes/loginRouter");
const userRouter = require("./routes/userRouter");
const orderRouter = require("./routes/orderRouter");



// ENRUTAMIENTO
router.use('/movies', movieRouter);
router.use('/login', loginRouter);
router.use('/users', userRouter);
router.use('/orders', orderRouter);



module.exports = router;
