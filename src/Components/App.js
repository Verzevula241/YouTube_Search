import React, { Component } from 'react';
import './App.css';
import Video from './list_item/Video.js'


class App extends Component {


  render() {
    const divStyle = {
      textAlign: 'center'
    }

    return (
      <div style={divStyle}>
        <h1>Fuck</h1>
        <Video name = "Auto" year = {2016} />
      </div>
    );
  }
}

export default App;
