require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user').User;
var Deck = require('../models/user').Deck;
var Card = require('../models/user').Card;

var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

router.delete('/removedeck', function(req, res, next){
    console.log('my bodyyyyyy',req.body)
    User.findById(req.body.userId, function (err, user){
        console.log('user to delete decks from', user, " ",req.body.deckId);
        let newDeck = [];
        for(let i=0; i<user.decks.length; i++) {
            if(req.body.deckId != user.decks[i]._id) {
                newDeck.push(user.decks[i]);
            }
        }

        user.decks = newDeck;
        User.update({_id: user._id}, {$set: {
            "decks": newDeck
        }}, function (err, user) {
            if(err) console.log("this is error", err);
            console.log('item removed!', newDeck);
            res.json(user);
            
        })
    })
})

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

router.post('/newCard', function (req, res, next) {
    console.log('New CARD ADDDINGNGJSGJGS..', req.body);
    let answer = req.body.cardAnswer;
    console.log('answer', answer);
    let question = req.body.cardQuestion;
    console.log('question',question);
    console.log('userId',req.body.user.id);
    console.log('decks',req.body.user.decks);
    console.log('deckId',req.body.deckId, typeof req.body.deckId);

    User.findOneAndUpdate({
        "_id": req.body.user.id,
        "decks._id": req.body.deckId
    },
    {
        "$push": {
            "decks.$.cards": {
                question: question,
                answer: answer
            }
        }
    }, { upsert: true },function(err,updatedUser){
        if(err){
            console.log('ERROR:', err);
        }
        console.log('UPDATED:', updatedUser);
        res.send('Success yo!');
    });
});
    




module.exports = router;
