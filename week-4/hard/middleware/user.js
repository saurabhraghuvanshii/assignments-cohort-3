<<<<<<< HEAD
const jwt = require('jsonwebtoken')

const { JWT_USER, JWT_ADMIN } = require('../config');

||||||| parent of c556ad3 (week4 assgnment done but not hard one)
=======
const jwt = require('jsonwebtoken')
const { JWT_sceret , JWT_sceretA } = require("../config")



>>>>>>> c556ad3 (week4 assgnment done but not hard one)
function userMiddleware(req, res, next) {
    // Implement user auth logic
<<<<<<< HEAD
    
    const token = req.headers.token 
    const decoded = jwt.verify(token, JWT_USER)

    if(decoded) {
        req.userId = decoded.id;
        next()
    }else{
        res.status(403).json({
            message: "user not found"
        })
    }
    
  
||||||| parent of c556ad3 (week4 assgnment done but not hard one)
=======
    
    const token = req.headers.token
    const decoded = jwt.verify(token, JWT_sceret)

    if(decoded) {
        req.userId = decoded.id;
        next()
    }else{
        res.status(403).json({
            message: "user not found"
        })
    }
    
  
>>>>>>> c556ad3 (week4 assgnment done but not hard one)
}

<<<<<<< HEAD
function adminMiddleware(req, res, next) {
    const token = req.headers.token
    const decoded = jwt.verify(token, JWT_ADMIN);

    if (decoded) {
        req.adminId = decoded.id;
        next();
    }else{
        res.status(403).json({
            message: "YOU are not signed in"
        })
    }
}

module.exports = {
    userMiddleware,
    adminMiddleware
}
||||||| parent of c556ad3 (week4 assgnment done but not hard one)
module.exports = userMiddleware;
=======
function adminMiddleware(req, res, next) {
    const token = req.headers.token
    const decoded = jwt.verify(token, JWT_sceretA);

    if (decoded) {
        req.adminId = decoded.id;
        next();
    }else{
        res.status(403).json({
            message: "YOU are not signed in"
        })
    }
}

module.exports = {
    userMiddleware,
    adminMiddleware
}
>>>>>>> c556ad3 (week4 assgnment done but not hard one)
