import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import ResponseFieldIntro from './components/response_field_intro';
import ResponseFieldClarendon from './components/response_field_clarendon';
import ResponseFieldBakery from './components/response_field_bakery';

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
    );
  }

  render() {
    if (this.state.location === 'clarendon') {
      return (
        <div className="App">
          <Header />
          <ResponseFieldClarendon />
        </div>
      );
    } else if (this.state.location === 'bakery') {
      return (
        <div className="App">
          <Header />
          <ResponseFieldBakery />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Header />
          <ResponseFieldIntro />
        </div>
      );
    }
  }
}

export default App;
