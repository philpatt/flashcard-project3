require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');



router.post('/newDeck', function (req, res, next) {
    console.log('My body is tell me..', req.body);
    User.findOneAndUpdate({ _id: req.body.id },
        {
            $push: {
                decks: {
                    name: req.body.deckName
                }
            }
        },
        function (err, user) {
            if (err) res.send(err);
            console.log('what the fuck we lookin at', user);
            res.json(user.decks);
        });
});







module.exports = router;
