import React, { Component } from 'react';
import frontImage from '../glitchImage.png';
import Typist from './Typist';
import '../App.css';

class Main extends Component {
  render() {
    return (
      <main>
        <div className="App">
          <Typist />
          <img className="img-responsive" src={frontImage} alt="Felipe Hernandez logo"/>
        </div>
      </main>
    );
  }
}

export default Main;
