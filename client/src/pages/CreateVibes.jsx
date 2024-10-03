// the form will have: Book genre, maturity yes/no boolean,
// after it runs the form there will be 3 books and 3 playlists, books and playlist colums.
// The books and playlists will be in two seperate coloums
// each book and each playlist is a card and each card will have a button to save or pass, it will have all the details of each
// There will be a button that says create vibe and the user has to pick one book and one playlist only. When they click on it they will be able to name this vibe and then rerouted back to homepage
// The name of the vibe and the book will show in the colums on home page for reference.

import React, { useState, useEffect } from "react";
import { Container, Form, Button, Card, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SelectYourVibe({ }) {
    //set the genre value in the global within the big function/SelectYourVibe
    //  this is a reacthook, all hooks are in the highest level
    const [genre, setGenre] = useState([]);
    const [books, setBooks] = useState([]);
    const [music, setMusic] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Genre:", genre);
        console.log("Books:", books);
        console.log("Music:", music);
    }, [genre, books, music]);

    const handleCheckboxChange = (event) => {
        event.preventDefault();
        const selectedVibe = event.target.value;
        console.log("__________", selectedVibe);
        setGenre([...genre, selectedVibe]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await callingVibes(genre);
        // navigate(`/ReccVibes/${JSON.stringify(music)}/${JSON.stringify(books)}`);
        
    };

    async function callingVibes(g) {
        const bookData = await fetchGoogleBooks(g);
        const musicData = await fetchSpotifyMusic(g);
        setBooks([...books, bookData]);
        setMusic([...music, musicData]); 
    }

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
            <Form method="post" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="fiction"
                        value="fiction"
                        label="Fiction"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="scienceFiction"
                        value="scienceFiction"
                        label="Science Fiction"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="fantasy"
                        value="fantasy"
                        label="Fantasy"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="romance"
                        value="romance"
                        label="Romance"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="thriller"
                        value="thriller"
                        label="Thriller"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="mystery"
                        value="mystery"
                        label="Mystery"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="horror"
                        value="horror"
                        label="Horror"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="biographyAndAutobiography"
                        value="biographyAndAutobiography"
                        label="Biography and Autobiography"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="historical"
                        value="historical"
                        label="Historical"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="selfHelp"
                        value="selfHelp"
                        label="Self Help"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="religion"
                        value="religion"
                        label="Religion"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="childrensBooks"
                        value="childrensBooks"
                        label="Children's Books"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="youngAdult"
                        value="youngAdult"
                        label="Young Adult"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="tragedy"
                        value="tragedy"
                        label="Tragedy"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <Button type="submit">Submit</Button>
            </Form>
            {/* <Row>
                <Col>
                <h2>Books</h2>
            <ListGroup>
                {books.slice(0, 3).map((book, index) => (
                    <ListGroupItem key={index}>
                        <h3>{book.title}</h3>
                        <img src={book.thumbnail} alt={book.title} />
                        <p>{book.description}</p>
                    </ListGroupItem>
                ))}
            </ListGroup>
                    
                </Col>
                <Col>
                    <h2>Playlists</h2>
                <ListGroup>
                {music.slice(0, 3).map((playlist, index) => (
                    <ListGroupItem key={index}>
                        <h3>{playlist.name}</h3>
                        <a href={playlist.href} target="_blank" rel="noopener noreferrer"></a>
                    </ListGroupItem>
                ))}
            </ListGroup>
                </Col>
            </Row> */}
        </Container>
    );
}

export default SelectYourVibe;
