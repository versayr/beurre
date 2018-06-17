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

    this.navigate = this.navigate.bind(this);

    this.state = {
      location: null,
      pastries: PastryList,
    };
  }

  navigate(page) {
    this.setState({
      location: page
    });
  }

  render() {
    let selectedField;
    const pastries = this.state.pastries;
    if (this.state.location === 'clarendon') {
      selectedField = <ResponseFieldClarendon pastries={pastries} />;
    } else if (this.state.location === 'bakery') {
      selectedField = <ResponseFieldBakery pastries={pastries} />;
    } else {
      selectedField = <ResponseFieldIntro navigate={this.navigate} />;
    }
    return (
      <div className="App">
        <Header navigate={this.navigate} />
        {selectedField}
      </div>
    );
  }
}

export default App;
