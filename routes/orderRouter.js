const router = require('express').Router();

const orderController = require('../controllers/orderController');

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        res.json(await orderController.newOrder(body));

    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

module.exports = router;
