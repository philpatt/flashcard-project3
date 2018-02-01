import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deckName: ''
    }
  }


handleNewDeckSubmit = (e) => {
  e.preventDefault();

  axios.post('/component/newDeck', {
    deckName: this.state.deckName,
    email: this.props.user.email
  })
}

handleDeckNameChange = (e) => {
  this.setState({deckName: e.target.value})
}

  render(){
    console.log("this is the current" + this.props.user.email)
    let form = '';
    if(!this.props.user){
      return (<Redirect to="/Signup" />);
      
    }
    else {
      form = (
        <form onSubmit={this.handleNewDeckSubmit}>
          <input type="hidden" name="email" value={this.props.user.email} />
          <input name="name" placeholder="deckname" value={this.state.deckName} onChange={this.handleDeckNameChange}></input>
          <button className="btn btn-secondary" type="submit"> + </button>
        </form>);
    }
    return (
        <div>                 
          {form}
        </div>
      );
  }
}

export default Home;
