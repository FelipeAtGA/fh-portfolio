import React, { Component } from 'react';
import Homeimage from './Homeimage';
import Typist from './Typist';
import './App.css';

class Main extends Component {
  render() {
    return (
      <main>
        <div className="App">
          <Typist />
          <Homeimage />
        </div>
      </main>
    );
  }
}

export default Main;
