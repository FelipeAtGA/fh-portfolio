import React, { Component } from 'react';
import Header from './components/Header';
import frontImage from './glitchImage.png';
import Typist from 'react-typist'; /* https://github.com/jstejada/react-typist */
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    console.log(this.state.type);
    return (
      <div className='wraper'>
        <Header />
        <main>
          <div className="App">
            <div className="typeWriter">
              <Typist>
                <span className="welcomeTxt">
                  Hello and welcome!<br />
                  In here, you will find work that I have done for web development, programming, and design.<br />
                  Thanks for visiting.
                </span>
              </Typist>
            </div>
            <div className="homeImg">
              <img className="img-responsive" src={frontImage} alt="Felipe Hernandez logo"/>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
