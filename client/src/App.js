import React, { Component } from 'react';
import Header from './components/Header';
import frontImage from './glitchImage.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='wraper'>
        <Header />
        <main>
          <div className="App">
            <img className="img-responsive" src={frontImage} alt="Felipe Hernandez logo"/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
