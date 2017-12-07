import React, { Component } from "react";
import Main from "./Main";

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
        <Main />
      </div>
    );
  }
}

export default App;
