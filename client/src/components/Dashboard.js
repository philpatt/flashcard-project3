import React, {Component} from 'react';
import Deck from './Deck.js';
import Sidenav from '../layout/Sidenav.js';
import Notecard from './Notecard.js';
import { Button } from 'react-bootstrap';
import { runInThisContext } from 'vm';



class Dashboard extends Component {
    constructor(props) {
        super(props);
        // dummy data
        
        this.state = {
            isOverview: true,
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
    this.setState({isOverview: !this.state.isOverview});
    console.log('###### should be alternating',this.state);
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
                    <Button bsStyle='info' onClick={this.handleViewDeckClick.bind(this)}>View Deck</Button>
                    <Button bsStyle='danger'onClick={this.handleDeckDeleteClick}>Delete</Button>
                    <Button bsStyle='submit' onClick={this.handleViewDeckClick.bind(this)}>All Decks</Button>
                </div>
            );
        });
        let singleDeck = this.state.decks.map((deck, i) => {
            return (
                <Deck key={i} deck={deck}/>
            );
        }); 
        
        return(
            <div>
                <h2>This is da Dashboard yo!</h2>
                <Sidenav />
                {this.state.isOverview ? allDecks : singleDeck}   
                <Notecard />
            </div>
        )
    }
}

export default Dashboard;
