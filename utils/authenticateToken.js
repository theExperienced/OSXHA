const jwt = require('jsonwebtoken');

exports.authenticateToken = (req, res, next) => {
    const token = req.cookies.jwt;

    if(token) {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken) => {
            if(err)
                return res.status(403).json({err});
            req.userId = decodedToken.id;
            next();
        });
    }
    else{
        res.sendStatus(401).json({err: 'error in authenticating token'});             ////////IMPROVE!!!
    }
}