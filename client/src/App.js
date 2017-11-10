import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='wraper'>
        <Header />
        <main>
          <div className="App">
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
