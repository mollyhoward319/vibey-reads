import { useState, createContext } from "react";
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

// TODO: Import UserContext stuff
export const UserContext = createContext();
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <NavBar />
      <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Outlet />
      </UserContext.Provider>
    </>
  );
}

export default App;

