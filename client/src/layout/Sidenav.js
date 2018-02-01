import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Sidenav extends Component {
    render (){
        return(
          <nav>
            <div className="navWide">
                <div className="wideDiv">
                  <a href="#" className="menu-of-decks">Deck 1</a>
                  <a href="#" className="menu-of-decks">Deck 2</a>
                  <a href="#" className="menu-of-decks">Deck 3</a>
                </div>
                <div className="row">

                    <div className="input-group">
                      <input type="text" className="form-control add-deck-name" placeholder="New deck name"/>
                      <span className="input-group-btn">
                        
                      </span>
                    </div>

                </div>
            </div>
          </nav>
        )
    }
}




export default Sidenav;
