import React, {Component} from 'react';
import Deck from './Deck.js';
import Sidenav from '../layout/Sidenav.js';
import Notecard from './Notecard.js';
import { Button } from 'react-bootstrap';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        // dummy data
        
        this.state = {
            decks: [
                {
                    name: 'Math',
                    cards: [{
                        question: 'Is math important?',
                        answer: 'Only if you want to know it.'
                    }, {
                        question: 'Is math important?',
                        answer: 'Only if you want to know it.'
                    }]
                },
                {
                    name: 'Code',
                    cards: [{
                        question: 'How do you become rich and famous?',
                        answer: 'Become a coder'
                    }]
                },
                {
                    name: 'Beer',
                    cards: [{
                        question: 'Is beer good?',
                        answer: 'Obviously'
                    }, {
                        question: 'What is beer?',
                        answer: 'Delicious.'
                    }]
                }
            ] //close array
        } //close state
    } //close constructor

handleViewDeckClick (event) {
    console.log ("click");
}

handleDeckDeleteClick (event) {
    console.log ("delete click");
}


    render () {
        const allDecks = this.state.decks.map(deck => {
            return(
                <div className="single-deck">
                    Deck: {deck.name} 
                <br />
                <Button bsStyle='info' onClick={this.handleViewDeckClick}>View Deck</Button>
                <Button bsStyle='danger'onClick={this.handleDeckDeleteClick}>Delete</Button>
                </div>
            );
        })
        return(
            <div>
                <h2>This is da Dashboard yo!</h2>
                <Sidenav />

                    {allDecks}
                    
                <Notecard />
            </div>
        )
    }
}
export default Dashboard;
