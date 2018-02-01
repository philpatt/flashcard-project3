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
    console.log('My body is tell me..', req.body.email)
    User.findOne({email: req.body.email}, function(err, user){
        console.log('this is the user',user)
        // User.({
        //     decks: req.body.deckName
        // }, function(err) {
        //     if (err){
        //         console.log('DB error', err);
        //         res.status(500).send({error: true, message: "Database Error -" + err.message});
        //     }
        //     else {
        //         console.log("You gots it!")
        //     }
        // })
    })
    
    
});



module.exports = router;
