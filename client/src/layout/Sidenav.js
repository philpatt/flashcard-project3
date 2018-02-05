import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';



class Sidenav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deckName: ''
    }
  }

  handleNewDeckSubmit = (e) => {
    e.preventDefault();
    console.log('###createdeck user submit', this.props)
    axios.post('/component/newDeck', {
      deckName: this.state.deckName,
      id: this.props.user.id
    }).then(() => {
      console.log('got added successfully', this.state.deckName);
      this.props.addNewDeck(this.state.deckName);
    })
  }
  handleDeckNameChange = (e) => {
    this.setState({ deckName: e.target.value })
  }
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
                      <form onSubmit={this.handleNewDeckSubmit}>
                        <input type="text" className="form-control add-deck-name" placeholder="add Deck" value={this.state.deckName} onChange={this.handleDeckNameChange} />
                        <button className="btn btn-secondary" type="submit"> + </button>
                      </form>
                    </div>
               </div>
          </nav>
        )
    }
}




export default Sidenav;
