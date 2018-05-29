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

  renderPastry(pastryArray, pastryType) {
    return (
      <ul className={ pastryType }>
        {pastryArray.map(function(name, index) {
          return <li key={ index }>{name}</li>;
        })}
      </ul>
    );
  }

  goBakery(e) {
    e.preventDefault();
    this.setState({
      location: 'bakery'
    });
  }

  goClarendon(e) {
    e.preventDefault();
    this.setState({
      location: 'clarendon'
    });
  }

  goBack(e) {
    e.preventDefault();
    this.setState({
      location: null
    });
  }

  render() {
    let selectedField;
    if (this.state.location === 'clarendon') {
      selectedField = <ResponseFieldClarendon pastries={this.state.pastries} />;
    } else if (this.state.location === 'bakery') {
      selectedField = <ResponseFieldBakery pastries={this.state.pastries} />;
    } else {
      selectedField = <ResponseFieldIntro goClarendon={this.goClarendon} goBakery={this.goBakery} />;
    }
    return (
      <div className="App">
        <Header goBack={this.goBack} />
        {selectedField}
      </div>
    );
  }
}

export default App;
