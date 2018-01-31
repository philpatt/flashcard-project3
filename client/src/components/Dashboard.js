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
            //write current object into new variable
            currentDeck: {},
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
        // this bindings
        this.handleViewDeckClick = this.handleViewDeckClick.bind(this)
    } //close constructor

handleViewDeckClick (event) {
    let dataKey = event.target.parentNode;
    console.log('####', dataKey.getAttribute('data-key'));
    let deckIndex = dataKey.getAttribute('data-key');
    let currentDeck = this.state.decks[deckIndex]
    this.setState(
        {
            isOverview: !this.state.isOverview,
            currentDeck: currentDeck
        }
    );
}

handleDeckDeleteClick (event) {
    console.log ("delete click");
}

//func onclick => event, get parent to get key, look in decks and set state of current deck to 

    render () {
        const allDecks = this.state.decks.map( (deck, index) => {
            return(
                <div className="single-deck" data-key={index}>
                    Deck: {deck.name} `
                    <br />
                    <Button bsStyle='info' onClick={event => this.handleViewDeckClick(event)}>View Deck</Button>
                    <Button bsStyle='danger'onClick={this.handleDeckDeleteClick}>Delete</Button>
                    <Button bsStyle='submit' onClick={event => this.handleViewDeckClick(event)}>All Decks</Button>
                </div>
            );
        });
        // let singleDeck = this.state.decks.map((deck, i) => {
        //     return (
        //         <Deck key={i} deck={deck}/>
        //     );
        // }); 
        let singleDeck = <Deck deck={this.state.currentDeck}/>
        
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
