import React, { Component } from 'react';
import PastryCategory from './pastry_category';

class ResponseFieldBakery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: null,
    };
    this.selectCategory = this.selectCategory.bind(this);
  }

  selectCategory(index) {
    this.setState({ selectedCategory: index });
  }

  onFormSubmit(event) {
    event.preventDefault;
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
      <form 
        onSubmit={this.onFormSubmit}
        className="ResponseField">
        <ul>
          {this.renderCategories()}
        </ul>
      </form>
    );
  }
}

export default ResponseFieldBakery;
