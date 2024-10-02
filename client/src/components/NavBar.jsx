import { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { UserContext } from "../App";
import { Link } from "react-router-dom";
import logo from "../assets/VibeyReadsLogo.png";

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
        <Link to="/">
          <Navbar.Brand>VIBEY READS</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {isAuthenticated ? (
            <Nav className="ms-auto">
              {/* <Link to="/profile"> */}
                <Nav.Link to="/profile">Profile</Nav.Link>
              {/* </Link> */}
              <Button onClick={() => handleLogout()}>Logout</Button>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Link to="/login">
              LOGIN
              </Link>
              <Link to="/signup">
                {/* <Nav.Link> */}
                  SIGNUP
                  {/* </Nav.Link> */}
              </Link>
              <Link to="/profile">
                {/* <Nav.Link> */}
                  PROFILE
                {/* </Nav.Link> */}
              </Link>
              <Link to="/createvibes">
                {/* <Nav.Link> */}
                  Create Vibe 
                  {/* </Nav.Link> */}
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;