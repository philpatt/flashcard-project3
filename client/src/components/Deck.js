import React, {Component} from 'react';
import Cards from './Cards.js';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';

class Deck extends Component {


     render () {

        console.log('HEY PETE THIS IS PROPS',this.props)
        // const allCards = this.props.deck.map(card => {
            // return(
            //     <div className="single-deck">
            //         card: {card.question} 
            //     </div>
        //     );
        // });
        return (
            <div className='deck-container'>
                {/* <h2>this is all the cards for { this.props.cards[0].question }</h2>
                <h2>this is all the cards for {this.props.cards[1].question}</h2>

                <Button bsStyle='info' onClick={ this.handleAddNewCard}>Add New card</Button> */}
                {/* <Button bsStyle='submit' onClick={this.handleViewDeckClick.bind(this)}>Go back to All Decks</Button> */}
                {/* {allCards} */}

            </div>
        )
    }
}

export default Deck;
