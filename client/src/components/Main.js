import React, { Component } from 'react';
import Homeimage from './Homeimage';
import Welcommessage from './WelcomeMessage';
import Navigation from './Navigation';
import './App.css';

class Main extends Component {
  render() {
    return (
      <main>
        <div className="App">
          <Navigation />
          <Welcommessage />
          <Homeimage />
        </div>
      </main>
    );
  }
}

export default Main;
