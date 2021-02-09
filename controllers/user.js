const bcrypt = require('bcryptjs');
const moment = require('moment');

const User = require('../models/User');

const createToken = require('../utils/createToken');


exports.postSignup = (req, res, next) => {
    const { username, password } = req.body;

    bcrypt.hash(password, 12)
        .then(hashedPass => {
            return User.create({username, password: hashedPass, tenants: []})
        })
        .then(result => {
            const id = result._id;
            const token = createToken(id);
            res.cookie('jwt', token, {maxAge: 3 * 24 * 60 * 60 * 1000});
            return res.status(200).json({token, id});
        })
        .catch(err => {
            console.log(err);
        });
};

exports.postLogin = (req, res, next) => {
    const { username, password } = req.body;

    User.findOne({username})                      
        .then(pressumedUser => {
            if(pressumedUser) {                 ///////SUCH USERNAME EXISTS
                bcrypt.compare(password, pressumedUser.password)
                    .then(isMatch => {
                        if(isMatch) {                               //////PASSWORD MATCH
                            const id = pressumedUser._id;
                            const token = createToken(id);
                            res.cookie('jwt', token, {maxAge: 3 * 24 * 60 * 60 * 1000});
                            console.log('USER CONNECTED', id, moment().format());
                            return res.status(200).json({token, id});
                        }else {                                     //////PASSWORD NO MATCH
                            return res.status(401).json(isMatch);
                        }
                    })
                    .catch(err => {
                        return res.status(404).json({err});
                    })
            }else {                         ///////NOTIFYING OF NO SUCH USERNAME
                return res.status(401).json({pressumedUser});
            }
        });
};

exports.postLogout = (req, res, next) => {
    console.log('USER DISCONNECTED', req.userId, moment().format());
    res.cookie('jwt', '', {maxAge: 1});
    return res.status(200).send('');
};