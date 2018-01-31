import React, {Component} from 'react';
import Cards from './Cards.js';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';

class Deck extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         cards: this.props.deck
    //     }
    // }

     render () {
        console.log('HEY PETE THIS IS PROPS',this.props.deck);

        const oneCard = this.props.deck.cards.map( (card) => {
            return(
                <div className = 'Card-container'>
                question: {card.question}
                answer: {card.answer}
                </div>
            );
        });
            
       
        return (
            <div className='deck-container'>
                <Button bsStyle='info' onClick={ this.handleAddNewCard}>Add New card</Button>
                {/* return to all cards button */}
                {oneCard}
            

                
                

            </div>
        )
    }
}

export default Deck;
