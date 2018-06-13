import React, { Component } from 'react';
import PastryCategory from './pastry_category';

class ResponseFieldBakery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: 2,
    };
  }

  renderCategories() {
    return this.props.pastries.map((pastry, index) => {
      if (this.state.selectedCategory === index) {
        return (
          <PastryCategory 
            key={index} 
            pastryCategory={pastry}
            isActive={true} />
        );
      }
      return (
        <PastryCategory 
          key={index} 
          pastryCategory={pastry} 
          isActive={false} />
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
