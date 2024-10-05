// the form will have: Book genre, maturity yes/no boolean,
// after it runs the form there will be 3 books and 3 playlists, books and playlist colums.
// The books and playlists will be in two seperate coloums
// each book and each playlist is a card and each card will have a button to save or pass, it will have all the details of each
// There will be a button that says create vibe and the user has to pick one book and one playlist only. When they click on it they will be able to name this vibe and then rerouted back to homepage
// The name of the vibe and the book will show in the colums on home page for reference.

import React, { useState, useEffect } from "react";
import {
  Container,
  Form,
  Button,
  Card,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../assets/App.css";

function SelectYourVibe({}) {
  //set the genre value in the global within the big function/SelectYourVibe
  //  this is a reacthook, all hooks are in the highest level
  const [genre, setGenre] = useState([]);
  const [books, setBooks] = useState([]);
  const [music, setMusic] = useState([]);



  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
        setGenre([...genre, value]);
    } else {
        setGenre(genre.filter((g) => g !== value));
    }
};

  const handleSubmit = async (event) => {
    event.preventDefault();
    await callingVibes(genre);
  };

  const callingVibes = async (g) => {
    const bookData = await fetchGoogleBooks(g);
    setBooks(bookData.items || []); // Store the fetched books data in state
    const musicData = await fetchSpotifyMusic(g);
    // Handle the fetched data as needed
};

  const fetchGoogleBooks = async (params) => {
    const query = params.join("+");
    console.log("Query:", query);
    const data = await fetch(`/api/books/${query}`);
    const response = await data.json();
    return response;
    // .then((response) => response.json())
    // .then((data) => return data)
    // .catch((error) =>
    //     console.error("Error fetching Google Books data:", error)
    // );
  };

  const fetchSpotifyMusic = async (params) => {
    const query = params.join("+");
    console.log("Query:", query);
    const data = await fetch(`/api/music/categories/${query}`);
    const response = await data.json();
    return response;
    // .then(response => response.json())
    // .then(data => setMusic([...music, data]))
    // .catch(error => console.error('Error fetching Spotify data:', error));
  };

  return (
    <Container>
      <br />
      <br />
      <Row>
        <h1 className="text-center header-margin">Choose Your Vibe</h1>
        <Form method="post" onSubmit={handleSubmit}>
          <Row className="justify-content-center">
            <Col xs="auto">
            <Form.Check
              type="checkbox"
              id="fiction"
              value="fiction"
              label="Fiction"
              onChange={handleCheckboxChange}
              className="custom-checkbox"
            />

          
            <Form.Check
              type="checkbox"
              id="fantasy"
              value="fantasy"
              label="Fantasy"
              onChange={handleCheckboxChange}
              className="custom-checkbox"
            />
     
          
            <Form.Check
              type="checkbox"
              id="romance"
              value="romance"
              label="Romance"
              onChange={handleCheckboxChange}
              className="custom-checkbox"
            />
     
          
            <Form.Check
              type="checkbox"
              id="tragedy"
              value="tragedy"
              label="Tragedy"
              onChange={handleCheckboxChange}
              className="custom-checkbox"
            />
     
          
            <Form.Check
              type="checkbox"
              id="thriller"
              value="thriller"
              label="Thriller"
              onChange={handleCheckboxChange}
              className="custom-checkbox"
            />
     
          
            <Form.Check
              type="checkbox"
              id="mystery"
              value="mystery"
              label="Mystery"
              onChange={handleCheckboxChange}
              className="custom-checkbox"
            />
     
          
            <Form.Check
              type="checkbox"
              id="horror"
              value="horror"
              label="Horror"
              onChange={handleCheckboxChange}
              className="custom-checkbox"
            />
     

          
            <Form.Check
              type="checkbox"
              id="historical"
              value="historical"
              label="Historical"
              onChange={handleCheckboxChange}
              className="custom-checkbox"
            />
     
          
            <Form.Check
              type="checkbox"
              id="selfHelp"
              value="selfHelp"
              label="Self Help"
              onChange={handleCheckboxChange}
              className="custom-checkbox"
            />
     
          
            <Form.Check
              type="checkbox"
              id="religion"
              value="religion"
              label="Religion"
              onChange={handleCheckboxChange}
              className="custom-checkbox"
            />
     

          
            <Form.Check
              type="checkbox"
              id="youngAdult"
              value="youngAdult"
              label="Young Adult"
              onChange={handleCheckboxChange}
              className="custom-checkbox"
            />
     
          
            <Form.Check
              type="checkbox"
              id="childrensBooks"
              value="childrensBooks"
              label="Children's Books"
              onChange={handleCheckboxChange}
              className="custom-checkbox"
            />
     
          
            <Form.Check
              type="checkbox"
              id="scienceFiction"
              value="scienceFiction"
              label="Science Fiction"
              onChange={handleCheckboxChange}
              className="custom-checkbox"
            />
     

          
            <Form.Check
              type="checkbox"
              id="biographyAndAutobiography"
              value="biographyAndAutobiography"
              label="Biography/Autobiography"
              onChange={handleCheckboxChange}
              className="custom-checkbox"
            />
     </Col>
          </Row>
         
          <Row className= "justify-content-center">
          <Button type="submit" className="mt-3 small-button">Submit</Button>
          </Row>
        </Form>
        </Row>

    

      <Row>
        <Col>
            <h2>Books</h2>
                        <Card style={{ width: "20rem", margin: "20px" }}>
                       <Card.Body>
                        <Card.Title>Book Title</Card.Title>
                        <Card.Text>Author</Card.Text>
                        <Card.Text>Description</Card.Text>
                       </Card.Body>
                        </Card>
                </Col>

        <Col>
          <h2>Playlists</h2>
          <Card style={{ width: "20rem", margin: "20px" }}>
          <Card.Body>
                        <Card.Title>Playlist Name</Card.Title>
                        <Card.Text>Link</Card.Text>
                        <Card.Text>Description</Card.Text>
                       </Card.Body>
          </Card>
        
        </Col>
      </Row>

      <Row></Row>
    </Container>
  );
}

export default SelectYourVibe;
