require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


/* POST /auth/signup route */
router.post('/newCard', function (req, res, next) {
    console.log('clicked and route works');
    
    // // Find by email
    // User.findOne({ email: req.body.email }, function (err, user) {
    //     if (user) {
    //         return res.status(400).send({ error: true, message: 'Bad Request - User already exists' });
    //     }
    //     else {
    //         // create and save a user
    //         User.create({
    //             name: req.body.name,
    //             email: req.body.email,
    //             password: req.body.password
    //         }, function (err, user) {
    //             if (err) {
    //                 console.log('DB error', err);
    //                 res.status(500).send({ error: true, message: 'Database Error - ' + err.message });
    //             }
    //             else {
    //                 // make a token & send it as JSON
    //                 var token = jwt.sign(user.toObject(), process.env.JWT_SECRET, {
    //                     expiresIn: 60 * 60 * 24 // expires in 24 hours
    //                 });
    //                 res.send({ user: user, token: token });
    //             }
    //         });
    //     }
    // });
    
});

module.exports = router;
