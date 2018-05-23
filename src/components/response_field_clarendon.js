import React from 'react';
import PastryCategory from './pastry_category';

const ResponseFieldClarendon = ({pastries}) => {
  const pastryCategories = pastries.map((pastry, index) => {
    return <PastryCategory key={index} />;
  });

  return (
    <div className="ResponseField">
      <ul>
        {pastryCategories}
      </ul>
    </div>
  );
};

export default ResponseFieldClarendon;
