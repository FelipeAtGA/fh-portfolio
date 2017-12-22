import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Header from "./Header";
import Webdevpro from "./Webdevpro";
import Home from "./Home";

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
          <Switch>
            <Route exact path="/Webdevpro"
              render={ () => <Webdevpro /> }
            />
            <Route exact path="/" component={ Home }/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
