import { useState, useEffect, createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import NavBar from "./components/NavBar";
import "./App.css";
import Profile from "./pages/Profile.jsx";
import Home from "./pages/Home.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Footer from "./components/Footer";
import ReccVibes from "./pages/ReccVibes.jsx";
import Header from "./components/Header";

export const UserContext = createContext();
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <div>
      <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <BrowserRouter>
        <Header username={username} />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/ReccVibes" element={<ReccVibes />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
