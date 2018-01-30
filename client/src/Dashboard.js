import React, {Component} from 'react';
import Deck from './Deck.js';
import Sidenav from './Sidenav.js';
import Notecard from './Notecard.js';

class Dashboard extends Component {
    render () {
        return(
        <div>
        <h2>This is da Dashboard yo!</h2>
        <Sidenav />
        <Deck />
        <Notecard />
        </div>
        )
        
    }
}
export default Dashboard;