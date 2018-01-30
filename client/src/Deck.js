import React, {Component} from 'react';
import Cards from './Cards.js';

class Deck extends Component {
    constructor(props){
        super(props);
        // setting state to fake cards
        this.state = {
            cards: [
                {
                    question: 'Is math important?',
                    answer: 'Only if you want to know it.',
                    category: 'Math'
                },
                {
                    question: 'How do you become rich and famous?',
                    answer: 'Become a coder',
                    category: 'Code'
                },
                {
                    question: 'Is beer good?',
                    answer: 'Obviously',
                    category: 'Beer'
                }, 
                {
                    question: 'Is math important?',
                    answer: 'Only if you want to know it.',
                    category: 'Math'
                },
                {
                    question: 'How do you become rich and famous?',
                    answer: 'Become a coder',
                    category: 'Code'
                },
                {
                    question: 'What is beer?',
                    answer: 'Delicious.',
                    category: 'Beer'
                }
            ]
        }
    }

     render () {
        //  filter state to only show by one category
        // maybe the button the sidebar will do this function?
        //  iterate through state to break up object array to show individual cards
        let deck;
        if(this.state.cards){
            deck = this.state.cards
            .filter(function (item) {
                return item.category == 'Beer';
            })
            .map(card => {
                console.log('DUUUUUDEEEEE THIS IS A CARD',card);
                return(
                    <Cards oneCard={card} />
                )
            })
        }
        console.log('########',this.state.cards);
        return (
            <div className='deck-container'>
                { deck }
            </div>
        )
        
    }
}

export default Deck;