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
          return (<a href="/" name={d.name} onClick={this.itemClick}>{d.name}</a>);
        });

        return(
          <nav>
            <div className="navWide">
                <div className="wideDiv">
                  {deckList}
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
