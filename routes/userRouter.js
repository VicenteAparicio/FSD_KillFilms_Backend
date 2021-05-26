const router = require('express').Router();
const authenticate = require('../middleware/authenticate');

const userController = require('../controllers/userController');

// GET user by Id
router.get('/:id', authenticate, async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await userController.searchUserById(id));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

// POST new user with body
router.post('/', async (req, res) => {
    try {
        const body = req.body;
        res.json(await userController.newUser(body));

    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

// DELETE user by Id
router.delete('/:id', authenticate, async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await userController.deleteUser(id));

    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});
















module.exports = router;
