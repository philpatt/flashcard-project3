import React, {Component} from 'react';
import Cards from './Cards.js';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';

class Deck extends Component {
    constructor(props){
        super(props);
        // setting state to fake cards
        this.state = {
            cards: [
                {
                    question: 'Is math important?',
                    answer: 'Only if you want to know it.',
                    deck: 'Math'
                },
                {
                    question: 'How do you become rich and famous?',
                    answer: 'Become a coder',
                    deck: 'Code'
                },
                {
                    question: 'Is beer good?',
                    answer: 'Obviously',
                    deck: 'Beer'
                }, 
                {
                    question: 'Is math important?',
                    answer: 'Only if you want to know it.',
                    deck: 'Math'
                },
                {
                    question: 'How do you become rich and famous?',
                    answer: 'Become a coder',
                    deck: 'Code'
                },
                {
                    question: 'What is beer?',
                    answer: 'Delicious.',
                    deck: 'Beer'
                }
            ]
        }
    }
    handleAddNewCard = (e) => {
        console.log("CLICK");
        e.preventDefault();
        axios.post('/newCard', {

        }).catch(error => {
            console.log('ERROR ROUTING');
        })
    }

     render () {
        //  filter state to only show by one category
        // maybe the button the sidebar will do this function?
        //  iterate through state to break up object array to show individual cards
        //  delete the .filert function and leave .map if you want all of the cards to display individually...
        let deckFilter;
        if(this.state.cards){
            deckFilter = this.state.cards
            .filter(function (item) {
                return item.deck === 'Beer';
            })
            .map(card => {
                console.log('DUUUUUDEEEEE THIS IS A CARD',card);
                return(
                    <Cards oneCard={card} />
                )
            })
        }
        let deckTitle = this.state.cards.filter(item =>{
            return item.deck === 'Beer';
        })
        return (
            <div className='deck-container'>
                <h2>this is all the cards for { deckTitle[0].deck }</h2>
                { deckFilter }
                <Button bsStyle='info' onClick={ this.handleAddNewCard}>Add New card</Button>
            </div>
        )
    }
}

export default Deck;