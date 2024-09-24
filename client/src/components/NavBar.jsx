// todo: create nav bar that is static and in every part of the app except login
// will have: User Name or Username as the brand, a button for Whats Your Vibe? Maybe logo too

import { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { UserContext } from "../App";

function NavBar() {
  const { isAuthenticated, setIsAuthenticated } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    console.log("triggered");
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">Vibey Reads</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {isAuthenticated ? (
            <Nav className="ms-auto">
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Button onClick={() => handleLogout()}>Logout</Button>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Signup</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/create-vibe">What's Your Vibe?</Nav.Link>
          </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
