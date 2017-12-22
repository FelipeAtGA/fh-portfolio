import React, { Component } from "react";
import Home from "./Home";
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
        <main>
          <Home />
        </main>
      </div>
    );
  }
}

export default App;
