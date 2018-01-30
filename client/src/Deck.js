import React, {Component} from 'react';
import Cards from './Cards.js';



class Deck extends Component {
    render () {
        return (

            <div className="grid-of-decks">
              <div className="single-deck">Deck 1</div>
              <div className="single-deck">Deck 2</div>
              <div className="single-deck">Deck 3</div>
                <Cards />
            </div>)

    }
}

export default Deck;
