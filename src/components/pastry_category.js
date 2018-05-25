import React from 'react';

const PastryCategory = ({pastryCategory}) => {
  const categoryName = Object.keys(pastryCategory)[0];
  return (
    <li>
      {categoryName}
    </li>
  );
};

export default PastryCategory;
