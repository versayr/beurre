import React from 'react';

const PastryCategory = ({pastryCategory}) => {
  const categoryName = Object.keys(pastryCategory)[0];
  return (
    <li className="pastry-category">
      {categoryName}
    </li>
  );
};

export default PastryCategory;
