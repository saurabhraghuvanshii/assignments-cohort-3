const { Router } = require("express");
<<<<<<< HEAD
<<<<<<< HEAD
const { User } = require("../database/index")
const jwt = require("jsonwebtoken");
const { JWT_USER } = require("../config")
const { userMiddleware } = require("../middleware/user");
const userRouter = Router();
||||||| parent of c556ad3 (week4 assgnment done but not hard one)
const router = Router();
const userMiddleware = require("../middleware/user");

=======
const userRouter = Router();
||||||| parent of 0602141 (complete login)
const userRouter = Router();
=======
const { User } = require("../database/index")
const jwt = require("jsonwebtoken");
const { JWT_USER } = require("../config")
>>>>>>> 0602141 (complete login)
const { userMiddleware } = require("../middleware/user");
<<<<<<< HEAD
const { User, Todo } = require("../database/index")
>>>>>>> c556ad3 (week4 assgnment done but not hard one)
||||||| parent of 0602141 (complete login)
const { User, Todo } = require("../database/index")
=======
const userRouter = Router();
>>>>>>> 0602141 (complete login)
// User Routes
userRouter.post('/signup', (req, res) => {
    // Implement user signup logic
    const { email, password, name } = req.body;
    try {
        User.create({
            email,
            password,
            name
        })
    } catch (e) {
        console.error("error is", e)
    }

    res.json({
        message: "signup succed"
    })
});

<<<<<<< HEAD
<<<<<<< HEAD
userRouter.post('/login', async function (req, res) {
    // Implement user login logic
    const { email, password } = req.body;
    try {
        const user = await User.findOne({
            email,
            password
        })

        if (user) {
            const token = jwt.sign({
                id: user._id
            }, JWT_USER);

            res.json({
                token: token
            })
        }
    } catch (error) {
        res.status(403).json({
            message: "incorrect credentials"
        })

    }

    res.json({
        message: "you are signin"
    })

||||||| parent of c556ad3 (week4 assgnment done but not hard one)
router.post('/login', (req, res) => {
     // Implement user login logic
=======
userRouter.post('/login', (req, res) => {
||||||| parent of 0602141 (complete login)
userRouter.post('/login', (req, res) => {
=======
userRouter.post('/login', async function (req, res) {
>>>>>>> 0602141 (complete login)
    // Implement user login logic
<<<<<<< HEAD
>>>>>>> c556ad3 (week4 assgnment done but not hard one)
||||||| parent of 0602141 (complete login)
=======
    const { email, password } = req.body;
    try {
        const user = await User.findOne({
            email,
            password
        })

        if (user) {
            const token = jwt.sign({
                id: user._id
            }, JWT_USER);

            res.json({
                token: token
            })
        }
    } catch (error) {
        res.status(403).json({
            message: "incorrect credentials"
        })

    }

    res.json({
        message: "you are signin"
    })

>>>>>>> 0602141 (complete login)
});

userRouter.get('/todos', userMiddleware, (req, res) => {
    // Implement logic for getting todos for a user
});

userRouter.post('/logout', userMiddleware, (req, res) => {
    // Implement logout logic
});

module.exports = userRouter