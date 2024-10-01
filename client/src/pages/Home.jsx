// this is the page is the main page that everyone lives on
// the nav bar which has the option to vibes button, socials button, their name as a brand on the nav
// three sections: 1 section is the saved vibes, current vibes, future vibes
// Each section will have cards with the vibe that includes a picture of the book, book title, and playlist title, and name of the vibe. Each vibe will be its own card and is draggable to the columns. There will be a share button.
// footer logo and made by dev names

import React from 'react';
import NavBar from "../components/NavBar";
import logo from '../assets/VibeyReadsLogo.png'; // Ensure this path is correct

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <img src={logo} alt="Vibey Reads Logo" className="home-logo" />

        {/* Add more content here */}
      </div>
    </div>
  );
};

export default Home;
