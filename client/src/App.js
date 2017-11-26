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
                <span className="welcomeTxt">Hello, and welcome to my site!<br />
                In here, you will find work that I have done for web development, programming, and design.</span>
              </Typist>
            </div>
            <img className="img-responsive" src={frontImage} alt="Felipe Hernandez logo"/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
