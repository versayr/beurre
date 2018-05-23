import React from 'react';

const ResponseFieldIntro = ({goClarendon, goBakery}) => {
  return (
    <div className="ResponseField">
      <button 
        className="Location-clarendon"
        onClick={goClarendon}>
        {' I\'m in Clarendon '}
      </button>
      <button 
        className="Location-bakery"
        onClick={goBakery}>
        {' I\'m in the Bakery '}
      </button>
    </div>
  );
};

export default ResponseFieldIntro;
