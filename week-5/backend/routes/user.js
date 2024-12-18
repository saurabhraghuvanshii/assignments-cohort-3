const expres = require('express');
const jwt = require('jsonwebtoken');
const { authenticateJwt, USER_SECRET } = require("../middleware/user");
const { User } = require("../db");
const router = express.Router();

router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try{
        const user = await User.findOne({ username });
        if (user) {
            return res.status(403).json({ message: "User already exists" });
        }

        const newUser = new User({ username, password });
        await newUser.save();

        const token = jwt.sign({ userId: newUser._id }, USER_SECRET, { expiresIn: '1h' });
        res.json({ message: 'user signup successfully', token });
    }catch (err) {
        res.status(500).json({ message: "error in sigup", error });
    }
});

router.post('/signin', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (user) {
            const token = jwt.sign({ userId: user._id }, USER_SECRET, {expiresIn: '1h' });
            res.json({ message: 'Logged in successfully', token });
        } else {
            res.status(403).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error signin in', err });
    }
});

module.exports = router;