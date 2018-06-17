import React, { Component } from 'react';
import PastryCategory from './pastry_category';

class ResponseFieldBakery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: 2,
    };
    this.selectCategory = this.selectCategory.bind(this);
  }

  selectCategory(index) {
    this.setState({ selectedCategory: index });
  }

  renderCategories() {
    const categories = this.props.pastries;
    const selectedCategory = this.state.selectedCategory;

    return categories.map((pastry, index) => {
      if (selectedCategory === index) {
        return (
          <PastryCategory 
            key={index} 
            index={index} 
            pastryCategory={pastry}
            setActive={this.selectCategory}
            isActive={true} />
        );
      }
      return (
        <PastryCategory 
          key={index} 
          index={index} 
          pastryCategory={pastry} 
          setActive={this.selectCategory}
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
