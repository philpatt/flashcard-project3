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
        //  delete the .filert function and leave .map if you want all of the cards to display individually...
        let deck;
        if(this.state.cards){
            deck = this.state.cards
            .filter(function (item) {
                return item.category === 'Beer';
            })
            .map(card => {
                console.log('DUUUUUDEEEEE THIS IS A CARD',card);
                return(
                    <Cards oneCard={card} />
                )
            })
        }
        let category = this.state.cards.filter(item =>{
            return item.category === 'Beer';
        })

        console.log('########',category[0].category);



        return (

             <div className='deck-container'>
                <h2>this is all the cards for { category[0].category }</h2>
                { deck }
              <div className="single-deck">Deck 1</div>
              <div className="single-deck">Deck 2</div>
              <div className="single-deck">Deck 3</div>
                <Cards />
            </div>)
        )
    }
}

export default Deck;
