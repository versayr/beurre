import React, { Component } from 'react';
import PastryCategory from './pastry_category';

class ResponseFieldBakery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: null,
    };
  }

  renderCategories() {
    return this.props.pastries.map((pastry, index) => {
      return (
        <PastryCategory 
          key={index} 
          pastryCategory={pastry} />
      );
    });
  }

  render() {
    return (
      <div className="ResponseField">
        <ul>
          {this.renderCategories()}
        </ul>
      </div>
    );
  }
}

export default ResponseFieldBakery;
