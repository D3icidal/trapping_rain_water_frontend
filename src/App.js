import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Trapping Rain Water</h1>
        </header>
        <img src={logo} className="App-logo" alt="logo" />      <FirstComponent displaytext="First Component Data"/>
      </div>
    );
  }}

export default App;
