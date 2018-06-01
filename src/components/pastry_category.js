import React from 'react';
import PastryItem from './pastry_item';

const PastryCategory = (props) => {
  const categoryName = Object.keys(props.pastryCategory)[0];
  if (!props.isActive) {
    return (
      <li className="pastry-category">
        {categoryName}
      </li>
    );
  }
  return (
    <li className="pastry-category">
      <span>{categoryName}</span>
      <ul className={ categoryName }>
        {props.pastryCategory.categoryName.map(function(name, index) {
          return <li key={ index }>{name}</li>;
        })}
      </ul>
    </li>
  );
};

export default PastryCategory;
