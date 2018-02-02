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
        console.log('###card user submit', this.props.deck._id, this.props.user.id)
        axios.post('/component/newCard', {
            cardAnswer: this.state.cardAnswer,
            cardQuestion: this.state.cardQuestion,
            deckId: this.props.deck._id,
            user: this.props.user
        }).then ( (response) => {
            // console.log('card ADDED successfully', this.state.cardAnswer, this.state.cardQuestion, this.props.deck._id,
            // this.props.user._id
            // );
            console.log(response);
        })

    }

    handlecardQuestionChange = (e) => {
        this.setState({ cardQuestion: e.target.value })
        console.log(this.state.cardQuestion)
    }

    handlecardAnswerChange = (e) => {
        this.setState({ cardAnswer: e.target.value })
        console.log(this.state.cardAnswer)
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