import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import NavBar from "./components/NavBar";
// import App from "../App.css";
import Profile from "./pages/Profile.jsx";
// import Profile from './pages/Profile;'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


