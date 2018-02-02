require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user').User;
var Deck = require('../models/user').Deck;
var Card = require('../models/user').Card;

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

// db.collection.update(
//     {
//         "_id": 1,
//         "medications.id": 23,
//         "medications.prescriptions.id": 77
//     },
//     {
//         $set: { "medications.prescriptions.$.quantity": 30 }
//     },
//     false,
//     true
// )

router.post('/newCard', function (req, res, next) {
    console.log('New CARD ADDDINGNGJSGJGS..', req.body);
    let answer = req.body.cardAnswer;
    console.log('answer', answer);
    let question = req.body.cardQuestion;
    console.log('question',question);
    console.log('userId',req.body.user.id);
    console.log('decks',req.body.user.decks);
    console.log('deckId',req.body.deckId);

    User.findOneAndUpdate({_id: req.body.user.id
    },
     {
        $push: {
            cards: {
                question: question,
                answer: answer
            }
        }
        },function(err,updatedUser){
        if(err){
            console.log(err);
        }
        console.log(fupdatedUser);
    });
});
    // Deck.findOne({"_id": req.body.deckId}, {$addToSet: {decks: {cards: card}}
    // },function(err,deck){
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log(deck);
    //     });
    // });
    // User.findOne({ _id: req.body.user.id},{
    //     decks: {$elemMatch: {"_id": req.body.deckId}}  
    // },function(err,deck){
    //     if(err){
    //         console.log(err)
    //     }
    //     if(deck)console.log(deck.decks);
    //     deck.decks.push({
    //         cards: {
    //             question: question,
    //             answer: answer
    //         }
    //     });
    //     console.log('we made it out of the callback');
        // User.update({"_id": req.body.user.id},{
        //     $push: {
        //         cards: {
        //             question: question,
        //             answer: answer
        //         }
        //     }
        // }, function(err, newCard){
        //     if(err){
        //         console.log(err);
        //     }
        //     console.log(newCard);
        // });

        // res.json({newCard: newCard});
    // }).then(
    // User.findOne({_id: req.body.user.id},{decks: {$elemMatch: {"_id": req.body.deckId}}},function(err,deck){
    //     if(err){
    //         console.log(err);
    //     }
    //     res.json({deck:deck});
    //     }));
    //     if(deck.length>1){
    //         User.update({_id: user._id, decks: {$elemMatch: {"_id": user.decks.deckId}}},{
    //             $push: {
    //                 cards: {
    //                     question: question,
    //                     answer: answer
    //                 }
    //             }
    //         }, function(err, newCard){
    //             if(err){
    //                 console.log(err);
    //             }
    //         });
    //     }else{
    //         User.update({_id: user.id, decks: {$elemMatch: {"_id": user.decks.deckId}}},{
    //             $addToSet: {
    //                 cards: {
    //                     question: question,
    //                     answer: answer
    //                 }
    //             }
    //         }, function(err, newCard){
    //             if(err){
    //                 console.log(err);
    //             }
    //         });
    //     }
    //     if(err){
    //         console.log(err);
    //     }
    // });
    // User.findOne({_id: req.body.user.id}, {decks: {$elemMatch: {"_id": req.body.deckId}}},function(err,deck){
    //     if(err){
    //         console.log(err);
    //     }
    //     res.json({deck: deck});
// });






module.exports = router;
