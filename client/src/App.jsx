import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import NavBar from "./components/NavBar";
// import App from "../App.css";
import App1 from "./pages/Profile.jsx";
// import Profile from './pages/Profile;'


function App() {
  return (
    <div>     
      <NavBar/>
      <App1/>
    </div>
  );
}

export default App;


