import React from 'react';
// import PastryItem from './pastry_item';

// TODO: 
// + Consider breaking this into two components - <PastryCategory /> and 
// <ActivePastryCategory />
// + Does this need to be a class based component? Where should state be
// stored for this form?
// + Add a bottom limit of 0 for the number inputs

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
              className="pastry-item"
              key={ index }>
              <label>{name}</label>
              <input 
                type="number" 
                step="1" 
                placeholder="0" 
                min="0" />
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
