const router = require('express').Router();
const orderController = require('../controllers/orderController');
const authenticate = require('../middleware/authenticate');
const admin = require("../middleware/adminUser");

// GET all orders
router.get('/', admin, async (req, res) => {
    try {
        res.json(await orderController.searchAllOrders());
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

// GET all orders by Id
router.post('/orderuserid', async (req, res) => {
    try {
        const body = req.body;
        console.log("llegamos al controller");
        res.json(await orderController.searchOrderByUserId(body));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

// GET orders by city
router.post('/bycity', admin, async (req, res) => {
    try {
        const body = req.body;
        res.json(await orderController.searchOrdersByCity(body));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

// POST new order with body
router.post('/neworder', authenticate,async (req, res) => {
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
router.put('/modify/:id', authenticate,async (req,res)=> {
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
router.delete('/delete', authenticate, async (req,res)=> {
    try {
        const body = req.body;
        res.json(await orderController.deleteOrder(body));

    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})

module.exports = router;