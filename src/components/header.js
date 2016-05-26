import React, {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component{
  authButton(){
    return(<button>Sign In</button>)
  }
  render(){
    return (<div>
      <nav className="navbar navbar-right">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resrouces">Resources</Link>
          </li>
          <li className="nav-item">
            {this.authButton()}
          </li>
        </ul>
      </nav>
    </div>)
  }
}


export default Header
