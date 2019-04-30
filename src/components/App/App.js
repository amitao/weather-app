import React, { Component } from "react";
import Header from '../Header/Header';
import Search from '../Search/Search';
import "./App.css";



class App extends Component {
 
  render() {
    return (
      <div>
        <Header />
        <Search />
      </div>
    );
  }
}

export default App;
