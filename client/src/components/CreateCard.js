import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class CreateCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardQuestion: '',
            cardAnswer: ''
        }
    }


    handleNewCardSubmit = (e) => {
        e.preventDefault();
        console.log('###card user submit', this.props.decks)
        
        
    }

    handlecardQuestionChange = (e) => {
        this.setState({ cardQuestion: e.target.value })
    }

    handlecardAnswerChange = (e) => {
        this.setState({ cardAnswer: e.target.value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleNewCardSubmit}>
                    <input name="name" placeholder="question" value={this.state.cardQuestion} onChange={this.handlecardQuestionChange}></input>
                    <input name="name" placeholder="answer" value={this.state.cardAnswer} onChange={this.handlecardAnswerChange}></input>
                    <button className="btn btn-secondary" type="submit"> add card </button>
                </form>
            </div>
        )
    }
}

export default CreateCard;