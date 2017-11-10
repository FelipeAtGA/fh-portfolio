import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <div className="App">
            <ul className="Nav">
              <li>Home</li>
              <li>Work</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </header>
    );
  }
}

export default Header;
