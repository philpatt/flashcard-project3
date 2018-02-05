import React, { Component } from 'react';
import Logout from '../auth/Logout.js';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render(){
    let links = <span />;
    if(this.props.user){
      links = (
        <span>

          <Logout updateUser={this.props.updateUser} />
        </span>);
    }
    else {
      links = (
        <span>
          
        </span>);
    }

    return(
      <nav className="top-nav">
          <div>
          {/* <ul class="nav navbar-nav"> */}
            <li> {links} </li>
            {/* </ul> */}
        </div>
      </nav>
      );
  }
}

export default Nav;

