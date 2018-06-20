import React from 'react';
// import PastryItem from './pastry_item';

const PastryCategory = (props) => {
  const pastryCategory = props.pastryCategory;
  const categoryName = pastryCategory.name;
  const pastryItems = pastryCategory.list;

  if (props.isActive) {
    return (
      <li 
        className="pastry-category"
        onClick={ () => props.setActive(props.index) }>
        <span>{categoryName}</span>
        <ul className="active-category-list">
          {pastryItems.map(function(name, index) {
            return <li 
              className="pastryItem"
              key={ index }>
              <label>{name}</label>
              <input type="number" step="1" />
            </li>;
          })}
        </ul>
      </li>
    );
  }
  return (
    <li 
      className="pastry-category"
      onClick={ () => props.setActive(props.index) }>
      {categoryName}
    </li>
  );
};

export default PastryCategory;
