const jwt = require('jsonwebtoken');

const createToken = id => {
    return jwt.sign({id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: 60 * 302222222222222222222222});
};

module.exports = createToken;