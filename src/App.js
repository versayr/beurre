import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import ResponseFieldIntro from './components/response_field_intro';
import ResponseFieldClarendon from './components/response_field_clarendon';
import ResponseFieldBakery from './components/response_field_bakery';
import PastryList from './pastries';

class App extends Component {
  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);
    this.goClarendon = this.goClarendon.bind(this);
    this.goBakery = this.goBakery.bind(this);

    this.state = {
      location: null,
      pastries: PastryList,
    };
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

  goBakery (e) {
    e.preventDefault();
    this.setState({
      location: 'bakery'
    });
  }

  goClarendon (e) {
    e.preventDefault();
    this.setState({
      location: 'clarendon'
    });
  }

  goBack (e) {
    e.preventDefault();
    this.setState({
      location: null
    });
  }

  render() {
    if (this.state.location === 'clarendon') {
      return (
        <div className="App">
          <Header goBack={this.goBack} />
          <ResponseFieldClarendon pastries={this.state.pastries} />
        </div>
      );
    } else if (this.state.location === 'bakery') {
      return (
        <div className="App">
          <Header goBack={this.goBack} />
          <ResponseFieldBakery />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Header />
          <ResponseFieldIntro 
            goClarendon={this.goClarendon}
            goBakery={this.goBakery}
          />
        </div>
      );
    }
  }
}

export default App;
