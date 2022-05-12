import React, { Component } from "react";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

class App extends Component {
  render() {
    return (
      <div>
          <Header title={"To-Do"}/>
          <MainContainer />
      </div>
    );
  }
}

export default App;