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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Beurre</h1>
        </header>
        <p className="App-intro">
          Are you in Clarendon or the Bakery?
        </p>
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
    );
  }

  renderClarendon() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Beurre Clarendon</h1>
          <button
            className="Location-intro"
            onClick={() => this.setState({location: null})}>
            Back
          </button>
        </header>
        <div className="responseField">
          <ul className="pastries">
            <li><button>AM Pastries</button></li>
            <li>{this.renderPastry(this.state.muffins.slice(), 'muffins')}</li>
            <li><button>PM Pastries</button></li>
            <li>{this.renderPastry(this.state.scones.slice(), 'scones')}</li>
            <li><button>Cupcakes</button></li>
            <li><button>Other Pastries</button></li>
          </ul>
        </div>
      </div>
    );
  }

  renderBakery() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Beurre Bakery</h1>
          <button
            className="Location-intro"
            onClick={() => this.setState({location: null})}>
            Back
          </button>
        </header>
        <div className="responseField">
          <ul className="pastries">
            <li><button>AM Pastries</button></li>
            <li><button>PM Pastries</button></li>
            <li><button>Cupcakes</button></li>
            <li><button>Other Pastries</button></li>
          </ul>
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
    if (this.state.location === 'clarendon') {
      return (
        this.renderClarendon()
      );
    } else if (this.state.location === 'bakery') {
      return (
        this.renderBakery()
      );
    } else {
      return (
        this.renderIntro()
      );
    }
  }
}

export default App;
