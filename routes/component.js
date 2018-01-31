require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


// router.post('/newCard', function (req, res, next) {
//     console.log('clicked and route works');
// }

// //POST GET New Deck 
// router.get('/Home'), function (req,res) {
//     console.log('displaying decks');
// }

router.post('/newDeck', function (req, res, next) {
    console.log('petes req.BOD',req.body)
    User.findOne({
        decks:[{
            name: req.body.deckName
        }]
    }, console.log('poop'))
});



module.exports = router;
