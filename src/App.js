import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      scones: [
        'Chocolate Orange Scone',
        'Blueberry Lemon Scone',
        'Butterscotch Scone',
        'Maple Bacon Scone',
      ],
      muffins: [
        'Blueberry Muffin',
        'Morning Glory Muffin',
        'Chocolate Chip Muffin',
        'Banana Walnut Muffin',
      ],
    };
  }

  renderIntro() {
    return (
      <div className="Intro">
        <div className="ResponseField">
          <button 
            className="Location-clarendon" 
            onClick={() => this.setState({location: 'clarendon'})}>
            I'm in Clarendon
          </button>
          <button 
            className="Location-bakery" 
            onClick={() => this.setState({location: 'bakery'})}>
            I'm in the Bakery
          </button>
        </div>
      </div>
    );
  }

  renderClarendon() {
    return (
      <div className="Clarendon">
        <button
          className="Location-intro"
          onClick={() => this.setState({location: null})}>
          Back
        </button>
        <div className="ResponseField">
          {this.renderPastry(this.state.muffins.slice(), 'muffins')}
          {this.renderPastry(this.state.scones.slice(), 'scones')}
        </div>
      </div>
    );
  }

  renderBakery() {
    return (
      <div className="Bakery">
        <button
          className="Location-intro"
          onClick={() => this.setState({location: null})}>
          Back
        </button>
        <div className="ResponseField">
          {this.renderPastry(this.state.muffins.slice(), 'muffins')}
          {this.renderPastry(this.state.scones.slice(), 'scones')}
        </div>
      </div>
    );
  }

  renderPastry(pastryArray, pastryType) {
    return (
      <ul className={ pastryType }>
        {pastryArray.map(function(name, index) {
          return <li key={ index }>{name}</li>;
        })}
      </ul>
    )
  }

  render() {
    var responseField;

    if (this.state.location === 'clarendon') {
        responseField = this.renderClarendon()
    } else if (this.state.location === 'bakery') {
        responseField = this.renderBakery()
    } else {
        responseField = this.renderIntro()
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">welcome to beurre</h1>
        </header>
        {responseField}
      </div>
    );
  }
}

export default App;
