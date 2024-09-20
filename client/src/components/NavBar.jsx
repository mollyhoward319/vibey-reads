// todo: create nav bar that is static and in every part of the app except login
// will have: User Name or Username as the brand, a button for Whats Your Vibe? Maybe logo too

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
