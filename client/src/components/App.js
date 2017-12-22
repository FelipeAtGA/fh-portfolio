import React, { Component } from "react";
import Main from "./Main";
import Header from "./Header";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    console.log(this.state.type);
    return (
      <div className='wrapper'>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
