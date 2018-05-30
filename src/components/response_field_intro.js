import React from 'react';

const ResponseFieldIntro = ({navigate}) => {
  return (
    <div className="ResponseField">
      <button 
        className="Location-clarendon"
        onClick={() => navigate('clarendon')}>
        {' I\'m in Clarendon '}
      </button>
      <button 
        className="Location-bakery"
        onClick={() => navigate('bakery')}>
        {' I\'m in the Bakery '}
      </button>
    </div>
  );
};

export default ResponseFieldIntro;
