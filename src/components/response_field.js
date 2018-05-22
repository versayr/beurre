import React from 'react';
import ResponseFieldIntro from './response_field_intro';
import ResponseFieldClarendon from './response_field_clarendon';
import ResponseFieldBakery from './response_field_bakery';

const ResponseField = (props) => {
  const location = 'bakery';
  let selectedResponseField;
  if (this.location === 'clarendon') {
    selectedResponseField = <ResponseFieldBakery />;
  } else if (this.location === 'bakery') {
    selectedResponseField = <ResponseFieldBakery />;
  } else {
    selectedResponseField = <ResponseFieldIntro />;
  }
  
  return (
    <div className="ResponseField">
      {selectedResponseField}
    </div>
  );
};

export default ResponseField;
