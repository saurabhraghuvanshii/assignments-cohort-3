require('dotenv').config()
const jwt = require('jsonwebtoken');
const USER_SECRET = process.env.USER_SECRET
console.log(USER_SECRET);

const authenticateJwt = (req, res, next) => {
    const authHeader = req.heasders.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, USER_SECRET, (err, user)=>{
            if (err) {
                return res.status(403).json({ message: "Invaild token"});
            }
            req.userId = user.userId;
            next();
        });
    }else{
        res.status(401).json({ message: 'No token provided'});
    }
};

module.exports = {
    authenticateJwt,
    USER_SECRET
};
