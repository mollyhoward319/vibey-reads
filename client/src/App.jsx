import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import {getAllBooks} from "./api/bookmapping.js"; Please dont delete. This is testing the for the backend
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import NavBar from "./components/NavBar";
// import App from "../App.css";
import App1 from "./pages/Profile.jsx";
// import Profile from './pages/Profile;'

// const SPOTIFY_CLIENT_ID = "";
// const SPOTIFY_CLIENT_SECRET= "";

// todo: export default function App() {//   useEffect(() => {
//     async function getBooks() {
//       const data = await getAllBooks();
//       console.log("----------------", data);
//     }
//     getBooks()
//   }, []);
//   return <div>hello world</div>;
// } todo: dont delete this section please. its for testing backend lines 14 to 22


// import {
//   Container,
//   InputGroup,
//   FormControl,
//   Button,
//   Row,
//   Card,
// } from "react-bootstrap";


// const CLIENT_ID = "";
// const CLIENT_SECRET = "";


function App() {
  return (
    <div>     
      <NavBar/>
      <App1/>
    </div>
  );
}

export default App;


