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
        <ul className={ categoryName }>
          {pastryItems.map(function(name, index) {
            return <li 
              className="pastryItem"
              key={ index }>
              {name}
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
