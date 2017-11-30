import React, { Component } from 'react';
import frontImage from './glitchImage.png';
import Typist from 'react-typist'; /* https://github.com/jstejada/react-typist */
import '../App.css';

class Main extends Component {
  render() {
    return (
      <main>
        <div className="App">
          <div className="typeWriter">
            <Typist>
              <span className="welcomeTxt">Hello, and welcome to my site!<br />
              In here, you will find work that I have done for web development, programming, and design.</span>
            </Typist>
          </div>
          <img className="img-responsive" src={frontImage} alt="Felipe Hernandez logo"/>
        </div>
      </main>
    );
  }
}

export default Main;
