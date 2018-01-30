import React, {Component} from 'react';
import Cards from './Cards.js';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';

class Deck extends Component {


     render () {
        //  filter state to only show by one category
        // maybe the button the sidebar will do this function?
        //  iterate through state to break up object array to show individual cards
        //  delete the .filert function and leave .map if you want all of the cards to display individually...
        
        return (
            <div className='deck-container'>
                <h2>this is all the cards for { this.props.name }</h2>
                <Button bsStyle='info' onClick={ this.handleAddNewCard}>Add New card</Button>
            </div>
        )
    }
}

export default Deck;
