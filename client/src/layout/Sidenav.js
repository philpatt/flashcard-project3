import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Sidenav extends Component {
    itemClick = (e) => {
      e.preventDefault();
      console.log('itemClick target', e.target, e.target.name);
      this.props.singleClick(e.target.name);
    }

    render (){
        let deckList = this.props.decks.map(d => {
          return (<li className="Snav-links"><a href="/" className="sidenav-links" name={d.name} onClick={this.itemClick}>{d.name}</a></li>);
        });

        return(
          <nav>
            <div className="navWide">
                  <div className="sidebar-deck-name"> {deckList} </div>
                    <div className="input-group">
                      <input type="text" className="form-control add-deck-name" placeholder="Search"/>
                    </div>
               </div>
          </nav>
        )
    }
}




export default Sidenav;
