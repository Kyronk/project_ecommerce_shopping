const jwt = require("jsonwebtoken");

const middlewareToken = {
	
    verifyToken: (req, res, next) => {
        const token = req.headers["authorization"];
        if(token) {
            const accessToken = token.split("Bearer ")[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                if (err) return res.status(403).json("token is not valid");
                req.user = user;
                next();
            });
        } else {
            res.status(401).json("you are not authenticated");
        }
    },
};
module.exports = middlewareToken;
