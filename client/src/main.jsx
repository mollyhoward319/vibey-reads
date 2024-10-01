// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
// import { useState, useEffect, createContext } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "./pages/login";
// import Signup from "./pages/Signup";
// import NavBar from "./components/NavBar";
// import "./App.css";


import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Profile from './pages/Profile';
import Home from './pages/Home';
import ReccVibes from './pages/ReccVibes';
import Login from './pages/login';
import Signup from './pages/Signup';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/ReccVibes',
        element: <ReccVibes />,
      },
    ],
  },
]);

// Render the RouterProvider component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
