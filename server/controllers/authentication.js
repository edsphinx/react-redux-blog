const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
    // User has already had their email and password auth'd
    // We just need to give them a token
    res.send({ token: tokenForUser(req.user) });
}

exports.signup = function(req, res, next) {
    // console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(422).send({ error: 'You must provide email and password' });
    }

    // Checks if a user with the given email exists
    User.findOne({ email: email}, function(err, existingUser) {
        if (err) { return next(err); }

        // If a user with email does exist, return an error
        if(existingUser) {
            return res.status(422).send({ error: 'Email is in use already' });
        }

        // If a user with email doesn't exist, create and save user in DB
        const user = new User({
            email: email,
            password: password
        });
        user.save(function(err) {
            if (err) { return next(err); }

            // Respond to request with the notification that user was created successfully
            res.json({ token: tokenForUser(user) });
        });
    });
}