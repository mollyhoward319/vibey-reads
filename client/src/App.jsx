import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import NavBar from "./components/NavBar";
import "./App.css";
import App1 from "./pages/Profile.jsx";


function App() {
  return (
    <div>
      <NavBar />
      <App1 />     
      <Footer/>
    </div>
  );
}

export default App;


