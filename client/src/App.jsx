import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import App1 from "./pages/Profile.jsx";

function App() {
  return (
    <div>
      <App1 />     
    </div>
  );
}

export default App;


// const SPOTIFY_CLIENT_ID = "";
// const SPOTIFY_CLIENT_SECRET= "";
import "./App.css";
// import {
//   Container,
//   InputGroup,
//   FormControl,
//   Button,
//   Row,
//   Card,
// } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import NavBar from "./components/NavBar";

// const CLIENT_ID = "";
// const CLIENT_SECRET = "";

function App() {
  // const [searchInput, setSearchInput] = useState("");
  useEffect(() => {}, []);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      {/* <Container>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Search for Artist"
            type="input"
            onKeyPress={(event) => {
              if (event.key == "Enter") {
                console.log("Pressed enter");
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Button
            onClick={() => {
              console.log("Clicked Button");
            }}
          >
            Search
          </Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row-cols-4">
          <Card>
            <Card.Img src="#" />
            <Card.Body>
              <Card.Title>Album Name Here</Card.Title>
            </Card.Body>
          </Card>
        </Row>
      </Container> */}
    </div>
  );
}

export default App;
