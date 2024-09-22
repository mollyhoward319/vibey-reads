import React from 'react';
import './Header.css'; // Import CSS for styling

const Header = () => {
  return (
    <header className="header">
      <h1>Vibey Reads</h1>
      <nav>
        <ul>
          <li><a href="/">What's your Vibe?</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;