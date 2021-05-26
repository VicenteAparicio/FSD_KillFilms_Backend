const router = require('express').Router();

const orderController = require('../controllers/orderController');

// GET all orders
router.get('/', async (req, res) => {
    try {
        res.json(await orderController.searchAllOrders());
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

// POST new order with body
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
