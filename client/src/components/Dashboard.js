import React, {Component} from 'react';
import Deck from './Deck.js';
import Sidenav from '../layout/Sidenav.js';
import CreateDeck from './CreateDeck.js';
import Notecard from './Notecard.js';
import { Button } from 'react-bootstrap';
import { runInThisContext } from 'vm';
import { Redirect } from 'react-router-dom';



class Dashboard extends Component {
    constructor(props) {
        super(props);
        // dummy data
        this.state = {
            isOverview: true,
            //write current object into new variable
            currentDeck: {},
            allDecks: this.props.user.decks
        } //close state
        // this bindings
        this.handleViewDeckClick = this.handleViewDeckClick.bind(this)
    } //close constructor

handleViewDeckClick (event) {
    let dataKey = event.target.parentNode;
    console.log('####', dataKey.getAttribute('data-key'));
    let deckIndex = dataKey.getAttribute('data-key');
    let currentDeck = this.props.user.decks[deckIndex]
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

addNewDeck = (newDeckName) => {
    console.log('got to parent; setting state');
    let decks = this.state.allDecks;
    decks.push({ cards: [], name: newDeckName});
    console.log('decks is', decks);
    this.setState({ allDecks: decks });
}
allDecks = () =>{
    let mapDecks = this.state.allDecks.map((deck, index) => {
        return (
            <div className="single-deck" data-key={index}>
                Deck: {deck.name}
                <br />
                <Button bsStyle='info' onClick={event => this.handleViewDeckClick(event)}>View Deck</Button>
                <Button bsStyle='danger' onClick={this.handleDeckDeleteClick}>Delete</Button>
            </div>
        );
    });
    return mapDecks;
}

//func onclick => event, get parent to get key, look in decks and set state of current deck to 
    render () {
        let singleDeck = <Deck deck={this.state.currentDeck}/>

        if (this.props === null) {
           return (<Redirect to='/' />);
        } else {
            return(
                <div>
                    <h2>This is da Dashboard yo!</h2>
                    <Sidenav />
                    {this.state.isOverview ? this.allDecks() : singleDeck}
                    <CreateDeck user={this.props.user} addNewDeck={this.addNewDeck} />   
                    <Notecard />
                </div>
            )
        }   
    }
}
export default Dashboard;
