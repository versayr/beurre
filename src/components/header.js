import React from 'react';

const Header = ({navigate}) => {
  return (
    <header className="App-header">
      <h1 className="App-title">welcome to beurre</h1>
      <button onClick={() => navigate(null)}>Home</button>
    </header>
  );
};

export default Header;
