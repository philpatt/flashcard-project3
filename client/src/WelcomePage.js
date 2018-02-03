import React, { Component } from 'react';
import axios from 'axios';
import './WelcomePageStyle.css';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Welcome extends Component {
render() {
  return(
    <div className="section-a landing-page">
    {/* section-a flashdash title */}
      <div className="flashdash-header head">
        <header className="head-title head">{"{"} FLASHDASH {"}"}</header>
      </div>
        
        {/* section-b */}
        <div className='section-b'>
        {/*flashdash welcome */}
        <div className="subsection-b welcome">
          <div className="welcome-title">Welcome!</div>
          {/* instruction */}
          <div className='instr-container'>
            <div className="instruction">
              With FlashDash you have the ability to create flash cards on any study topic! </div>
            <div className="instruction">Create a deck of the topic you want to study.</div>
            <div className="instruction">Then, create flashcards in that deck!</div>
            <div className="instruction">Use Quiz Mode to study your newly created flashcards! </div>
          </div>
        </div>
        {/* login/signup buttons */}
        <div className='subsection-b login-signup'>
          <div className="cont">
            <div className='login-signup-btn'>
              <Link to="/signup" >Sign Up to Sudy</Link>
            </div>
            <div className='login-signup-btn'>
              <Link to="/login" cl>Login to Keep Studying</Link>
            </div>          


          </div>
          
        </div>
      </div>

    </div>
    )
  }
}

export default Welcome;
