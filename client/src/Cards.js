import React, {Component} from 'react';
import './CardStyle.css';
import { Button } from 'react-bootstrap';

class Cards extends Component {
    render () {
        console.log('this is my cards object',this.props.oneCard)
        return (
            <div>
                <ul className='all-cards'>
                    <li className='card-box'>
                        <p><strong>Category</strong> : <i>{this.props.oneCard.category}</i></p>
                        <p><strong>Question</strong>: <i>{this.props.oneCard.question}</i></p>
                        <p><strong>Answer</strong>: <i>{this.props.oneCard.answer}</i></p>
                        <Button bsStyle='danger' >Delete</Button>
                        <Button bsStyle='info'>View Card</Button>
                        
                    </li>
                </ul>
            </div>

        )
    }
}

export default Cards;
