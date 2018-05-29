import React from 'react';
import logo from '../logo.svg';

const Header = ({goBack}) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">welcome to beurre</h1>
      <button onClick={goBack}>Home</button>
    </header>
  );
};

export default Header;
