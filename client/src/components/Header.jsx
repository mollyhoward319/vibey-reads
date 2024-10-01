import React from 'react';

const Header = ({username}) => {
  return (
    <header className="header">
      <h2></h2>
      <nav>
        <ul>
        <li>Welcome, ({username})!</li> 
        </ul>
      </nav>
    </header>
  );
};

export default Header;