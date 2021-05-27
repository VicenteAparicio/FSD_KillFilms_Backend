const router = require('express').Router();
const userController = require('../controllers/userController');
const orderController = require('../controllers/orderController');
const authenticate = require('../middleware/authenticate');

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

// GET orders by city
router.get('/bycity/:city', async (req, res) => {
    try {
        const city = req.params.city
        res.json(await orderController.searchOrdersByCity(city));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

// POST new order with body
router.post('/neworder', async (req, res) => {
    try {
        const body = req.body;
        res.json(await orderController.newOrder(body));

    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});


// PUT modify order
router.put('/modify/:id', async (req,res)=> {
    try {
        const orderId = req.params.id;
        const body = req.body;
        res.json(await orderController.modifyOrder(body, orderId));

    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})


// DELETE order by ID
router.delete('/delete/:id', authenticate, async (req,res)=> {
    try {
        const id = req.params.id;
        res.json(await orderController.deleteOrder(id));

    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})







module.exports = router;