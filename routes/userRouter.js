const router = require('express').Router();
const authenticate = require('../middleware/authenticate');
const admin = require("../middleware/adminUser");
const userController = require('../controllers/userController');


// GET all users
router.get('/allUsers', admin, async (req, res) => {
    try {
        res.json(await userController.allUsers());
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

// GET user by Id
router.get('/byid/:id', authenticate, async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await userController.searchUserById(id));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

//GET user by Name
router.post('/byname', admin, async (req, res) => {
    try {
        const body = req.body;
        res.json(await userController.searchUserByName(body));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

//GET user by email
router.post('/byemail', authenticate, async (req, res) => {
    try {
        const body = req.body;
        res.json(await userController.searchUserByEmail(body));
    } catch (err) {
        return res.status(500).json({
            mesaje: err.message
        });
    }
});

// POST new user with body
router.post('/newuser', async (req, res) => {
    try {
        const body = req.body;
        res.json(await userController.newUser(body));

    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

// POST modify user with body
router.put('/modify', async (req, res) => {
    try {
        const body = req.body;
        res.json(await userController.modifyUser(body));

    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

// DELETE user by Id
router.delete('/delete', authenticate, async (req, res) => {
    try {
        const body = req.body;
        res.json(await userController.deleteUser(body))

    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});
















module.exports = router;
